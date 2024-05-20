
"use client";
import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Timestamp,
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
} from "firebase/firestore";
import * as XLSX from "xlsx";
import { fetchSingleDoc, fetchScheduleTestData } from "@/api/fileApi"; // import fetchScheduleTestData
import { db } from "@/firebase/firebaseConfig";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Schedule = {
	scheduleTestId: string;
	id: number;
	name: string;
	lastModified: Timestamp;
	uploadedAt: Timestamp;
};

export const columns: ColumnDef<Schedule>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "name",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "scheduleDate",
		header: "Schedule Date",
		cell: ({ row }) => {
			const date = new Date(row.getValue("scheduleDate"));
			const formatted = date.toLocaleDateString();
			return <div> {formatted}</div>;
		},
	},
	{
		accessorKey: "uploadedAt",
		header: "Date Created",
		cell: ({ row }: { row: any }) => {
			const firebaseTimestamp = row.getValue("uploadedAt");
			const date = firebaseTimestamp.toDate(); // Convert Firebase timestamp to Date object
			const formatted = date.toLocaleDateString("en-US", {
				year: "numeric",
				month: "short",
				day: "2-digit",
			});
			return <div> {formatted}</div>;
		},
	},
	{
		accessorKey: "lastModified",
		header: "Last Modified",
	},
	{
		accessorKey: "data",
		header: "data",
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const file = row.original;

		

			const handleExportClick = async () => {
				const convertJsonToXlsx = (jsonData: any) => {
					try {
						// Parse the JSON data
						const parsedData = JSON.parse(jsonData);
			
						// Log the parsed data to understand its structure
						console.log("Parsed data:", parsedData);
			
						// Ensure the data is an array of objects
						const dataArray = Array.isArray(parsedData) ? parsedData : [parsedData];
			
						// Define the desired column sequence
						const columnOrder = [
							"SchoolArea", "Hall", "StudentId", "Batch", "Room", "Floor", "CheckBox",
							"OperationsStaffInitial", "OperationsStaffNotes", "OrderNotes", "ProcessedDate",
							"UnitType", "First", "Last", "Team", "Load", "AdministrativeNotes"
						];
			
						// Rearrange the data according to the column order
						const orderedData = dataArray.map(item => {
							const orderedItem: any = {};
							columnOrder.forEach(col => {
								orderedItem[col] = item[col];
							});
							return orderedItem;
						});
			
						// Create a new workbook
						const workbook = XLSX.utils.book_new();
			
						// Convert the JSON object to a worksheet with the specified header
						const worksheet = XLSX.utils.json_to_sheet(orderedData, { header: columnOrder });
			
						// Add the worksheet to the workbook
						XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
			
						// Generate the XLSX file
						const xlsxData = XLSX.write(workbook, {
							type: "binary",
							bookType: "xlsx",
						});
			
						// Create a Blob from the XLSX data
						const blob = new Blob([s2ab(xlsxData)], {
							type: "application/octet-stream",
						});
			
						// Create a download link and trigger the download
						const downloadLink = document.createElement("a");
						downloadLink.href = URL.createObjectURL(blob);
						downloadLink.download = "data.xlsx";
						document.body.appendChild(downloadLink);
						downloadLink.click();
						document.body.removeChild(downloadLink);
					} catch (error) {
						console.error("Error converting JSON to XLSX:", error);
					}
				};
			
				// Helper function to convert a string to an ArrayBuffer
				const s2ab = (s: string) => {
					const buf = new ArrayBuffer(s.length);
					const view = new Uint8Array(buf);
					for (let i = 0; i < s.length; i++) {
						view[i] = s.charCodeAt(i) & 0xff;
					}
					return buf;
				};
			
				const runConversion = async (id: number) => {
					try {
						// Fetch the scheduleTestId from scheduleData
						const scheduleTestId = await fetchSingleDoc(id);
			
						// Fetch the scheduleTest data using the retrieved scheduleTestId
						const scheduleTestData = await fetchScheduleTestData(scheduleTestId);
			
						// Process the scheduleTestData to create a consistent format for XLSX
						const processedData = Object.keys(scheduleTestData).map(key => {
							return scheduleTestData[key];
						});
			
						// Convert the processed data to JSON and then to XLSX
						const jsonData = JSON.stringify(processedData);
			
						convertJsonToXlsx(jsonData);
					} catch (error) {
						console.error("Error fetching and converting data:", error);
					}
				};
			
				runConversion(file.id);
			};

			

			const handlePushToAppClick = async () => {
				try {
					const deleteFirstDocument = async (collectionPath: string) => {
						const snapshot = await getDocs(collection(db, collectionPath));
						if (snapshot.size > 0) {
							await deleteDoc(snapshot.docs[0].ref);
							const colRef = collection(db, "pushedFile");

							await addDoc(colRef, {
								currentFileId: file.id,
							});

							console.log("First document deleted successfully");
						} else {
							const colRef = collection(db, "pushedFile");
							await addDoc(colRef, {
								currentFileId: file.id,
							});
							console.log("Collection is empty");
						}
					};

					deleteFirstDocument("pushedFile");
				} catch (error) {
					console.log(error);
				}
			};
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Link href={`/protected/schedule/edit/${file.scheduleTestId}`}>
								Edit
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem onClick={handlePushToAppClick}>
							Push to app
						</DropdownMenuItem>
						<DropdownMenuItem onClick={handleExportClick}>
							Export file
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

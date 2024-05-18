"use client";
import { Input } from "@/components/ui/input";
import { NavProps, ScheduleEditProps } from "@/types";
import { Download, FolderPlus } from "lucide-react";
import { useState, useRef, ChangeEvent } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { db } from "@/firebase/firebaseConfig";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Progress } from "../ui/progress";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { read, utils } from "xlsx";

const AllScheduleNavbar = ({ table }: NavProps<any>) => {
	const [filePicked, setFilePicked] = useState<File | null>(null);
	const [uploadProgress, setUpoadProgress] = useState(0);
	const [excelFile, setExcelFile] = useState<ArrayBuffer | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const { toast } = useToast();

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFilePicked(e.target.files[0]);
			const selectedFile = e.target.files[0];

			let reader = new FileReader();
			reader.readAsArrayBuffer(selectedFile);
			reader.onload = (e: any) => {
				if (e.target) {
					setExcelFile(e.target.result);
				}
			};
		}
	};

	const handleFileUpload = async () => {
		if (!filePicked) {
			console.log("filePicked is undefined");
			return;
		}
		if (excelFile !== null) {
			const workbook = read(excelFile, { type: "buffer" });
			const sheetName = workbook.SheetNames[0];
			const worksheet = workbook.Sheets[sheetName];
			const data: ScheduleEditProps[] = utils.sheet_to_json(worksheet);
			const transformedData = data.reduce((acc, obj, index) => {
				acc[`schedules${index + 1}`] = obj; // Using index as the key to ensure uniqueness
				return acc;
			}, {} as { [key: string]: ScheduleEditProps });

			try {
				const docRef = await addDoc(
					collection(db, "scheduleTest"),
					transformedData
				);
				addDoc(collection(db, "scheduleData"), {
					name: filePicked.name,
					lastModified: filePicked.lastModified,
					data: docRef.id,
					uploadedAt: Timestamp.now(),
				});
				toast({
					title: "Sucessful",
					description: "File uploaded sucessfully!",
					action: <ToastAction altText="Close">Close</ToastAction>,
				});
			} catch (error) {
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: "There was a problem with your request.",
					action: <ToastAction altText="Try again">Try again</ToastAction>,
				});
			}
		}
	};
	return (
		<div className="grid grid-cols-3 gap-5 items-center">
			<div className="flex gap-3 col-span-2">
				<Input
					type="text"
					placeholder="Search..."
					ref={fileInputRef}
					value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
					onChange={(event) =>
						table.getColumn("name")?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/>
			</div>
			<div className="flex gap-5 justify-end">
				<div className="flex flex-col gap-2 items-center">
					<Dialog>
						<DialogTrigger>
							<div className=" bg-gray-200 p-3">
								<Download />
							</div>
							<span className="text-xs">Import</span>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Choose a file to import</DialogTitle>
								<DialogDescription>
									<Label htmlFor="fileUpload" className="mb-10">
										File Upload (.csv,.xlsx,.xls)
									</Label>
									<Input
										id="File Upload"
										type="file"
										accept=".csv,.xlsx,.xls"
										onChange={handleFileChange}
										className="my-2"
									/>

									<div>
										<Button
											onClick={handleFileUpload}
											className="bg-red-600 hover:bg-red-500 border border-red-600"
										>
											Upload
										</Button>
										{uploadProgress > 0 && <Progress value={uploadProgress} />}
									</div>
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</div>
				<div className="flex flex-col gap-2 items-center">
					<div className="bg-gray-200 p-3">
						<FolderPlus />
					</div>
					<span className="text-xs">Create new</span>
				</div>
			</div>
		</div>
	);
};

export default AllScheduleNavbar;

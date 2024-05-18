"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ScheduleEditProps } from "@/types";
import AddNewRow from "@/components/scheduleEditNav/AddNewRow";

export const columns: ColumnDef<ScheduleEditProps>[] = [
	{
		accessorKey: "SchoolArea",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					School/Area
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "Hall",
		header: "Hall",
	},
	{
		accessorKey: "StudentId",
		header: "Student Id",
	},
	{
		accessorKey: "Batch",
		header: "Batch",
	},
	{
		accessorKey: "Room",
		header: "Room",
	},
	{
		accessorKey: "Floor",
		header: "Floor",
	},
	{
		accessorKey: "CheckBox",
		header: "Checkbox",
	},
	{
		accessorKey: "OperationsStaffInitial",
		header: "Operation Staff Initial",
	},
	{
		accessorKey: "OrderNotes",
		header: "Order Notes",
	},
	{
		accessorKey: "UnitType",
		header: "Unit Type",
	},
	{
		accessorKey: "First",
		header: "First",
	},
	{
		accessorKey: "Last",
		header: "Last",
	},
	{
		accessorKey: "Team",
		header: "Team",
	},
	{
		accessorKey: "Load",
		header: "Load",
	},
	{
		accessorKey: "OperationsStaffNotes",
		header: "Operations Staff Notes",
	},
	{
		accessorKey: "AdministrativeNotes",
		header: "Administrative Notes",
	},
	{
		accessorKey: "ProcessedDate",
		header: "Processed Date",
	},

	{
		id: "actions",
		cell: ({ row }) => {
			// fetch data and pass down

			return (
				<Dialog>
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
								<DialogTrigger className="flex items-center gap-2 ">
									Update row
								</DialogTrigger>
							</DropdownMenuItem>
						</DropdownMenuContent>

						<DialogContent>
							<DialogHeader>
								<DialogTitle>Update row</DialogTitle>
								<DialogDescription>
									Make sure to save before closing.
								</DialogDescription>
								<AddNewRow fileDetails={row.id} isUpdate={true} />
							</DialogHeader>
						</DialogContent>
					</DropdownMenu>
				</Dialog>
			);
		},
	},
];

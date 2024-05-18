import { ChevronRight, CirclePlusIcon, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import FilterForm from "./FilterForm";
import { NavProps } from "@/types";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import AddNewRow from "./AddNewRow";

function ScheduleEditNav<TData>({
	table,
	fileDetails,
	details,
}: NavProps<TData> & { fileDetails: string; details: any }) {
	const handleAddRow = () => {};
	return (
		<div className="flex justify-between items-center">
			<div className="flex gap-2 items-center">
				<Link href="/schedule" className="hover:underline">
					<p>Schedule</p>
				</Link>
				<ChevronRight color="#94A3B8" size="18" />
				<p className=" font-bold capitalize">{details.name}</p>
			</div>
			<div className="flex gap-2">
				<div className="  py-2 px-2 gap-2 rounded-md r shadow-md bg-slate-100 hover:bg-red-600 hover:text-white">
					<Dialog>
						<DialogTrigger className="flex items-center gap-2 ">
							<CirclePlusIcon size={18} />
							Add row
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Are you absolutely sure?</DialogTitle>
								<DialogDescription>
									This action cannot be undone. This will permanently delete
									your account and remove your data from our servers.
								</DialogDescription>
								<AddNewRow fileDetails={fileDetails} isUpdate={false} />
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</div>

				<div onClick={handleAddRow}></div>
				<Sheet>
					<SheetTrigger className="flex gap-2 py-2 px-2 rounded-md items-center shadow-md bg-slate-100 hover:bg-red-600 hover:text-white">
						<SlidersHorizontal size={18} />
						Filter
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Filter</SheetTitle>
							<SheetDescription>
								This action cannot be undone. This will permanently delete your
								account and remove your data from our servers.
							</SheetDescription>
							<FilterForm table={table} />
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
}

export default ScheduleEditNav;

import React from "react";
import { Input } from "@/components/ui/input";
import { NavProps } from "@/types";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";

const FilterForm = ({ table }: NavProps<any>) => {
	return (
		<div className="grid gap-x-2 gap-y-5 grid-cols-2">
			<div className="flex flex-col gap-2">
				<Label>School/Area</Label>
				<Input
					placeholder="School/Area"
					value={
						(table.getColumn("School/Area")?.getFilterValue() as string) ?? ""
					}
					onChange={(event) =>
						table.getColumn("School/Area")?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<Label>Hall</Label>
				<Input
					placeholder="Hall"
					value={(table.getColumn("Hall")?.getFilterValue() as string) ?? ""}
					onChange={(event) =>
						table.getColumn("Hall")?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<Label>Batch</Label>
				<Input
					placeholder="Batch"
					value={(table.getColumn("Batch")?.getFilterValue() as string) ?? ""}
					onChange={(event) =>
						table.getColumn("Batch")?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<Label>Team</Label>
				<Input
					placeholder="Team"
					value={(table.getColumn("Team")?.getFilterValue() as string) ?? ""}
					onChange={(event) =>
						table.getColumn("Team")?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<Label>Unit Type</Label>
				<Select
					onValueChange={(selectedValue) =>
						table.getColumn("Unit Type")?.setFilterValue(selectedValue)
					}
				>
					<SelectTrigger>
						<SelectValue placeholder="MF7" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="MF7">MF7</SelectItem>
						<SelectItem value="MF9">MF9</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="flex flex-col gap-2">
				<Label>Status</Label>
				<Select
					onValueChange={(selectedValue) =>
						table.getColumn("Status")?.setFilterValue(selectedValue)
					}
				>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="Ongoing">Ongoing</SelectItem>
						<SelectItem value="Done">Done</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="flex flex-col gap-2">
				<Label>Stage</Label>
				<Select
					onValueChange={(selectedValue) =>
						table.getColumn("Stage")?.setFilterValue(selectedValue)
					}
				>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="First">First</SelectItem>
						<SelectItem value="Second">Second</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="flex flex-col gap-2">
				<Label>Room Range</Label>
				<Select
					onValueChange={(selectedValue) =>
						table.getColumn("Room Range")?.setFilterValue(selectedValue)
					}
				>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="100-400">100-400</SelectItem>
						<SelectItem value="500-1000">500-1000</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};

export default FilterForm;

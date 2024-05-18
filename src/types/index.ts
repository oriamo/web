import { Table } from "@tanstack/react-table";
import { ReactNode } from "react";

export interface NavProps<TData> {
	table: Table<TData>;
}

export interface FileData {
	id: string;
	[key: string]: any; // Add any additional properties
}

export type ListDetailsProps = {
	title: string;
	children: ReactNode;
};
export type ReviewProps = {
	id: string;
	type: string;
	unit: string;
	status: string;
	filedNotes: string;
	stage: "completed" | "notStarted" | "inProgress" | "audited";
	review: string;
	orderNumber: string;
};

export type ScheduleEditProps = {
	id: string;
	SchoolArea: string;
	Hall: string;
	Room: number;
	UnitType: string;
	CheckBox: boolean;
	OperationStaffInitial: string;
	OrderNotes: string;
	First: string;
	Last: string;
	OrderId: string;
	StudentId: number;
	AdminstrativeNotes: string;
	Batch: number;
	Team: string;
	ProcessedDate: string;
	Load: string;
	Left: number;
	Floor: number;
	OperationsStaffNotes: string;
};

export interface UpdateDataReal {
	[key: string]: ScheduleEditProps;
}

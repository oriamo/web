import { ListDetailsProps } from "@/types";
import React from "react";

const ScheduleDetailsList = ({ title, children }: ListDetailsProps) => {
	return (
		<div>
			<p className="text-xs capitalize text-slate-400">{title}</p>
			<div className="capitalize">{children}</div>
		</div>
	);
};

export default ScheduleDetailsList;

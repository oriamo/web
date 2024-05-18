import ScheduleDetailsList from "@/components/list/ScheduleDetailsList";
import { useReviewData } from "@/lib/context/reviewContext";
import React from "react";

const ReviewDetail = () => {
	const { selectedReview } = useReviewData();
	const { type, unit, status, filedNotes, stage, review, id } =
		selectedReview || {};

	// const {id, } = reviewData.data
	return (
		<>
			{selectedReview && (
				<div className="col-span-9 pl-5 gap-2 flex flex-col">
					<ScheduleDetailsList title="Completed">
						<p>{stage}</p>
					</ScheduleDetailsList>

					<ScheduleDetailsList title="Audited">
						<p>Auditor 1 </p>
					</ScheduleDetailsList>
					<ScheduleDetailsList title="Status">
						<p>{status}</p>
					</ScheduleDetailsList>
					<ScheduleDetailsList title="Type">
						<p>{type}</p>
					</ScheduleDetailsList>
					<ScheduleDetailsList title="Unit">
						<p>{unit}</p>
					</ScheduleDetailsList>
					<ScheduleDetailsList title="Order Notes">
						<p>{filedNotes}</p>
					</ScheduleDetailsList>
					<ScheduleDetailsList title="Review">
						<p>{review}</p>
					</ScheduleDetailsList>
				</div>
			)}
		</>
	);
};

export default ReviewDetail;

"use client";
import { useReviewData } from "@/lib/context/reviewContext";
import React, { useEffect } from "react";

const ReviewCard = (data: any) => {
	// const { reviewData, setReviewData } = useReviewData();
	const { school, room, hall, stage, orderNumber } = data.data;

	const handleReviewChange = () => {
		// setReviewData(data);
	};

	return (
		<div
			className="p-5 hover:bg-red-200 border border-gray-200 shadow-md relative mb-5"
			onClick={handleReviewChange}
		>
			<p className="text-sm">{orderNumber}</p>
			<div className="grid  grid-cols-4 mt-2">
				<div>
					<p className="text-xs">School</p>
					<p className="text-3xl">{school}</p>
				</div>

				<div className="col-span-2">
					<p className="text-xs">Hall</p>
					<p className="text-3xl">{hall}</p>
				</div>
				<div>
					<p className="text-xs">Room</p>
					<p className="text-3xl">{room}</p>
				</div>
			</div>
			<div
				className={`h-4 w-2 absolute right-0 top-0 mt-2 ${
					stage === "completed"
						? "bg-blue-500"
						: stage === "inProgress"
						? "bg-yellow-500"
						: stage === "audited"
						? "bg-green-500"
						: "bg-red-500"
				}`}
			></div>
		</div>
	);
};

export default ReviewCard;
function elseIf(arg0: boolean) {
	throw new Error("Function not implemented.");
}

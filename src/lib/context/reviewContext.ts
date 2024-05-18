import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { ReviewProps } from "@/types";

type ReviewDataProps = {
	selectedReview: ReviewProps | undefined;
	setSelectedReview: Dispatch<SetStateAction<any>>;
};

export const ReviewDataContext = createContext<ReviewDataProps | undefined>(
	undefined
);

export const useReviewData = () => {
	const context = useContext(ReviewDataContext);
	if (context === undefined) {
		throw new Error(
			"useReviewDatamust be used within a ReviewDataContext Provider"
		);
	}
	return context;
};

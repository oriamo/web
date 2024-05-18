"use client";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewCard from "@/components/cards/ReviewCard";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { FileData, ReviewProps } from "@/types";
import { ReviewDataContext } from "@/lib/context/reviewContext";
import ReviewDetail from "./ReviewDetail";

const Review = () => {
	const [reviewData, setReviewData] = useState<ReviewProps[]>();
	const [selectedReview, setSelectedReview] = useState<ReviewProps>();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, "order_review"));

				const filesData = querySnapshot.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));
				setReviewData(filesData);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<ReviewDataContext.Provider value={{ selectedReview, setSelectedReview }}>
			<div className="grid grid-cols-12">
				<div className="col-span-3 border-r border-slate-200 h-screen pr-2">
					<div>
						<Input placeholder="Search" />
						<Tabs defaultValue="all" className=" mt-2">
							<TabsList>
								<TabsTrigger value="all">All</TabsTrigger>
								<TabsTrigger value="uncompleted">Uncompleted</TabsTrigger>
								<TabsTrigger value="audited">Audited</TabsTrigger>
							</TabsList>
							<TabsContent value="all">
								<div className="h-[800px] overflow-y-auto">
									{reviewData?.map((data) => {
										return (
											<div
												key={data.id}
												onClick={() => setSelectedReview(data)}
											>
												<ReviewCard data={data} />
											</div>
										);
									})}
								</div>
							</TabsContent>
							<TabsContent value="uncompleted">
								{reviewData?.map((data) => {
									if (data.stage !== "audited") {
										return (
											<div
												key={data.id}
												onClick={() => setSelectedReview(data)}
											>
												<ReviewCard data={data} />
											</div>
										);
									}
								})}
							</TabsContent>
							<TabsContent value="audited">
								{reviewData?.map((data) => {
									if (data.stage === "audited") {
										return (
											<div
												key={data.id}
												onClick={() => setSelectedReview(data)}
											>
												<ReviewCard data={data} />
											</div>
										);
									}
								})}
							</TabsContent>
						</Tabs>
					</div>
				</div>
				<ReviewDetail />
			</div>
		</ReviewDataContext.Provider>
	);
};

export default Review;

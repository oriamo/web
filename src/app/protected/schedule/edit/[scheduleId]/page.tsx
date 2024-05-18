"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "./dataTable";
import { columns } from "./columns";
import { FileData, ScheduleEditProps } from "@/types";
import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	where,
} from "firebase/firestore";
import { db, storage } from "@/firebase/firebaseConfig";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import * as XLSX from "xlsx";
import { log } from "console";
import ScheduleEditNav from "@/components/scheduleEditNav";

const EditSchedule = ({
	params,
}: {
	params: {
		scheduleId: string;
	};
}) => {
	const [singleFile, setSingleFile] = useState<any>();
	const [loading, setLoading] = useState(false);
	const [fileDetails, setFileDetails] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log(params.scheduleId);

				const querySnapShot = await getDoc(
					doc(db, "scheduleTest", params.scheduleId)
				);
				if (querySnapShot.exists()) {
					const scheduleData = querySnapShot.data();
					console.log({ scheduleData });
					const arr = Object.entries(scheduleData).map(([key, value]) => value);
					setSingleFile(arr);
				}
			} catch (error) {
				console.error("Error listing items in directory:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>; // or a spinner component
	}

	return (
		<div>
			{singleFile && (
				<DataTable
					columns={columns}
					data={singleFile}
					fileDetails={params.scheduleId}
					details={singleFile}
				/>
			)}
		</div>
	);
};

export default EditSchedule;

"use client";
import { DataTable } from "./dataTable";
import { columns } from "./columns";
import { SelectedDataContext } from "@/lib/context/context";
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebaseConfig";
import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import { FileData } from "@/types";

const Schedule = () => {
	const [selectedTable, setSelectedTable] = useState<File[]>([]);
	const [files, setFiles] = useState<any>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, "scheduleData"));
				const filesDataPromises: Promise<FileData>[] = querySnapshot.docs.map(
					async (docu) => {
						const docRef = doc(db, "scheduleData", `${docu.id}`);
						const docSnap = await getDoc(docRef);
						const scheduleId = docSnap.exists() ? docSnap.data().data : "";
						return {
							...docu.data(),
							id: docu.id,
							scheduleTestId: scheduleId,
						};
					}
				);

				const filesData: FileData[] = await Promise.all(filesDataPromises);

				const filteredFilesData = filesData.map((obj) => {
					const { data, ...rest } = obj;
					return rest;
				});

				console.log({ filteredFilesData });

				setFiles(filteredFilesData);
			} catch (error) {
				console.error("Error listing items in directory:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	// if (loading) {
	// 	return (
	// 		<div className="flex items-center justify-center h-screen">Loading</div>
	// 	);
	// }

	return (
		<SelectedDataContext.Provider value={{ selectedTable, setSelectedTable }}>
			<div className="flex flex-col gap-3">
				<DataTable columns={columns} data={files} />
			</div>
		</SelectedDataContext.Provider>
	);
};

export default Schedule;

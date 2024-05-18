import { db } from "@/firebase/firebaseConfig";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

export const fetchSingleDoc = async (id: number | string) => {
	const docRef = doc(db, "scheduleData", `${id}`);
	const queryRef = query(
		collection(db, "scheduleData"),
		where("__name__", "==", docRef.id)
	);
	const querySnapShot = await getDocs(queryRef);
	const docData = querySnapShot.docs[0].data();
	const jsonData = JSON.stringify(docData.data);
	return jsonData;
};

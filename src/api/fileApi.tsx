


import { db } from "@/firebase/firebaseConfig";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

export const fetchSingleDoc = async (id: number | string) => {
    const docRef = doc(db, "scheduleData", `${id}`);
    const queryRef = query(
        collection(db, "scheduleData"),
        where("__name__", "==", docRef.id)
    );
    const querySnapShot = await getDocs(queryRef);

    if (!querySnapShot.empty) {
        const docData = querySnapShot.docs[0].data();
        const scheduleTestId = docData.data;  // Assuming this holds the scheduleTestId

        return scheduleTestId;
    } else {
        throw new Error("No such document!");
    }
};



import {  getDoc } from "firebase/firestore";

export const fetchScheduleTestData = async (scheduleTestId: string) => {
    const docRef = doc(db, "scheduleTest", scheduleTestId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        throw new Error("No such document in scheduleTest!");
    }
};

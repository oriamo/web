import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDWtD-eXUleIY7FWmbJXjBsXVfp4mbvyD0",
	authDomain: "myfridgerental-a860a.firebaseapp.com",
	projectId: "myfridgerental-a860a",
	storageBucket: "myfridgerental-a860a.appspot.com",
	messagingSenderId: "148615730547",
	appId: "1:148615730547:web:4324889551104b6507a106",
	measurementId: "G-1KPSRWF8VW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

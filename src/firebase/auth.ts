"use client";
import { useEffect, useState } from "react";
import { app } from "./firebaseConfig";
import {
	getAuth,
	onAuthStateChanged,
	User as FirebaseUser,
} from "firebase/auth";

export const auth = getAuth(app);

export const useUser = () => {
	const [user, setUser] = useState<FirebaseUser | null | false>();

	useEffect(() => {
		user;

		return onAuthStateChanged(auth, (user) => setUser(user));
	}, []);

	return user;
};

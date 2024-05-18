"use client";
import { auth } from "@/firebase/auth";
import {
	User as FirebaseUser,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

export const Signout = async () => {
	return signOut(auth);
};

export const AuthUser = () => {
	const [user, setuser] = useState<FirebaseUser | null | false>();
	useEffect(() => {
		onAuthStateChanged(auth, (user) => setuser(user));
	}, []);

	return user;
};

"use client";
import { Dispatch, SetStateAction, createContext, useContext } from "react";

export type AuthDataProps = {
	currentUser: null;
	setCurrentUser: Dispatch<SetStateAction<any>>;
};

export const AuthDataContext = createContext<AuthDataProps | undefined>(
	undefined
);

export const useAuthData = () => {
	const context = useContext(AuthDataContext);
	if (context === undefined) {
		throw new Error(
			"useSharedData must be used within a SharedDataContext Provider"
		);
	}
	return context;
};

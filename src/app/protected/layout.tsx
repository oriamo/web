"use client";

import { ReactNode } from "react";
import AuthGuard from "./_component/AuthGuard";
import { AuthUser } from "@/lib/context/useAuth";

export default function Layout({ children }: { children: ReactNode }) {
	const user = AuthUser();

	if (user === false) return <>Auth loading...</>;
	if (!user) return <AuthGuard />;
	return children;
}

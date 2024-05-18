"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AuthGuard = () => {
	const pathname = usePathname();
	return (
		<div>
			<pre>You&apos;re trying to access {pathname}</pre>
			Please{" "}
			<Link
				href="/sign-in"
				className="underline font-bold hover:text-slate-600"
			>
				Sign In
			</Link>
		</div>
	);
};

export default AuthGuard;

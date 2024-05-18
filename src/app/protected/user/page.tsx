"use client";
import { AuthUser, Signout } from "@/lib/context/useAuth";
import Link from "next/link";
import React from "react";
import { useToast } from "@/components/ui/use-toast";

function Profile() {
	const user = AuthUser();
	const { toast } = useToast();

	const handleSignout = () => {
		Signout();
		toast({
			title: "Signed out",
			description: "You've succesfully signed out",
		});
	};
	return (
		<div>
			User:
			<div className="underline">
				{user ? (
					<div onClick={handleSignout}>Signout</div>
				) : (
					<Link href="/sign-in">Login</Link>
				)}
			</div>
		</div>
	);
}

export default Profile;

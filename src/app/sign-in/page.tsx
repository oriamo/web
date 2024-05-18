"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Suspense } from "react";
import SignInForm from "./SignInForm";

const SignIn = () => {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<Card className="mx-auto max-w-sm mt-32">
					<CardHeader>
						<CardTitle className="text-2xl">Login</CardTitle>
						<CardDescription>
							Enter your email below to login to your account
						</CardDescription>
					</CardHeader>
					<CardContent>
						<SignInForm />
					</CardContent>
				</Card>
			</Suspense>
		</div>
	);
};

export default SignIn;

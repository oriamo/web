"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/firebase/auth";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const SignUp = () => {
	const { toast } = useToast();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [levels, setLevels] = useState("level1");
	const router = useRouter();

	const handleSubmit = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const addUser = async () => {
					const snapShot = collection(db, "users");
					const user = await addDoc(snapShot, {
						email,
						levels,
						isAdmin: levels === "level3" ? true : false,
					});

					toast({
						title: "Account created!",
						description: "Thanks for creating an account. You can login now! ",
					});
					if (levels === "level3") {
						router.push("/sign-in");
					} else {
						router.push("/thank-you");
					}
				};

				addUser();

				// Signed up
				const user = userCredential.user;
			})
			.catch((error) => {
				if (error) {
					toast({
						variant: "destructive",
						title: "Email exists!",
						description: "Try to create using another email address.",
					});
				}

				// ..
			});
	};
	return (
		<Card className="mx-auto max-w-md w-2/3 mt-32">
			<CardHeader>
				<CardTitle className="text-2xl">Create Account</CardTitle>
				<CardDescription>Login to get access to the dashboard</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@example.com"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required
						/>
					</div>

					<Select onValueChange={(value) => setLevels(value)}>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Drivers" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="level1">Drivers</SelectItem>
							<SelectItem value="level2">Auditors</SelectItem>
							<SelectItem value="level3">Admin</SelectItem>
						</SelectContent>
					</Select>

					<div className="grid gap-2">
						<div className="flex items-center">
							<Label htmlFor="password">Password</Label>
							<Link href="#" className="ml-auto inline-block text-sm underline">
								Forgot your password?
							</Link>
						</div>
						<Input
							id="password"
							type="password"
							required
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
					</div>

					<Button type="submit" className="w-full" onClick={handleSubmit}>
						Create Account
					</Button>
				</div>
				<div className="mt-4 text-center text-sm">
					You&apos;ve an account already?{" "}
					<Link href="#" className="underline">
						Login
					</Link>
				</div>
			</CardContent>
		</Card>
	);
};

export default SignUp;

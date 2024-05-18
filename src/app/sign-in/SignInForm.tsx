import { signInWithEmailAndPassword } from "firebase/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/firebase/auth";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SignInForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { toast } = useToast();
	const router = useRouter();
	const searchParams = useSearchParams();

	const continueTo = searchParams.get("continueTo") ?? "/protected/schedule";
	const handleSubmit = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;

				router.replace(continueTo);

				toast({
					title: "Welcome back",
					description: "Welcome back",
				});
				// ...
			})
			.catch((error) => {
				if (error) {
					toast({
						variant: "destructive",
						title: "Unsucessful",
						// description: "Thanks for creating an account. You can login now! ",
					});
				}
			});
	};
	return (
		<>
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
					Login
				</Button>
			</div>
			<div className="mt-4 text-center text-sm">
				Don&apos;t have an account? {""}
				<Link href="/sign-up" className="underline">
					Sign up
				</Link>
			</div>
		</>
	);
};

export default SignInForm;

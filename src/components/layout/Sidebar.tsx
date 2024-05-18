import React from "react";
import { CalendarCheck, CircleUser, Home, Star } from "lucide-react";
import Link from "next/link";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip";
import { AuthUser } from "@/lib/context/useAuth";

export default function Sidebar() {
	const user = AuthUser();
	return (
		<div className="bg-gray-100 py-8 items-center justify-between flex flex-col h-screen">
			{/* {!user ? ( */}
			<div className="flex flex-col gap-8">
				{user && (
					<>
						<TooltipProvider>
							<Tooltip>
								<Link href="/protected/dashboard">
									<TooltipTrigger>
										<Home />
									</TooltipTrigger>
									<TooltipContent side="right">Dashboard</TooltipContent>
								</Link>
							</Tooltip>
						</TooltipProvider>

						<TooltipProvider>
							<Tooltip>
								<Link href="/protected/schedule">
									<TooltipTrigger>
										<CalendarCheck />
									</TooltipTrigger>
									<TooltipContent side="right">Schedule</TooltipContent>
								</Link>
							</Tooltip>
						</TooltipProvider>
						<TooltipProvider>
							<Tooltip>
								<Link href="/protected/review">
									<TooltipTrigger>
										<Star />
									</TooltipTrigger>
									<TooltipContent side="right">Review</TooltipContent>
								</Link>
							</Tooltip>
						</TooltipProvider>
					</>
				)}
			</div>
			{/* ) : (
				<div></div>
			)} */}
			<div>
				<TooltipProvider>
					<Tooltip>
						<Link href="/protected/user">
							<TooltipTrigger>
								<CircleUser />
							</TooltipTrigger>
							<TooltipContent side="right">User</TooltipContent>
						</Link>
					</Tooltip>
				</TooltipProvider>
			</div>
		</div>
	);
}

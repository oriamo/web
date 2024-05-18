import React, { FC, PropsWithChildren } from "react";
import Sidebar from "./Sidebar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="flex min-h-screen w-full flex-col bg-muted/40">
			<aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
				<Sidebar />
			</aside>
			<main className=" flex flex-col sm:gap-4 sm:py-4 sm:pl-16 pr-2">
				{children}
			</main>
		</div>
	);
};

export default Layout;

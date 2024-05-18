import React from "react";
import { ScheduleDateRange } from "@/components/cards/ScheduleDateRange";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { useSelectedTableData } from "@/lib/context/context";
import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";

interface File {
	[x: string]: any;
	// Add other properties as needed
}

const ScheduleFilterNavbar = () => {
	const { selectedTable } = useSelectedTableData();
	const { toast } = useToast();

	const handleDeleteClick = async () => {
		try {
			const deletePromises = selectedTable.map(async (file: File) => {
				const id = file?.original.id;
				await deleteDoc(doc(db, "scheduleData", id));
			});

			await Promise.all(deletePromises);

			toast({
				title: "Sucessful",
				description: "Files successfully deleted!",
				action: <ToastAction altText="Close">Close</ToastAction>,
			});
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Unsucessful",
				description: "Unable to delete your file(s)!",
				action: <ToastAction altText="Close">Close</ToastAction>,
			});
		}
	};
	return (
		<>
			<div className="flex justify-between items-center mt-5">
				<div className="flex gap-5">
					<div className="flex items-center gap-2">
						<p>Schedule date :</p>
						<ScheduleDateRange />
					</div>
					<div className="flex items-center gap-2">
						<p>Date created :</p>
						<ScheduleDateRange />
					</div>
				</div>
				<Dialog>
					<DialogTrigger>
						<Button
							className="flex px-3 border border-gray-600"
							variant="ghost"
						>
							<Trash2 />
							<p>Delete</p>
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Are you sure you want to delete?</DialogTitle>
							<DialogDescription>
								This action cannot be undone. This will permanently delete your
								files and remove your data from our servers.
							</DialogDescription>
							<DialogFooter>
								<DialogClose asChild>
									<Button variant="ghost">Cancel</Button>
								</DialogClose>
								<DialogClose asChild>
									<Button variant="destructive" onClick={handleDeleteClick}>
										Delete
									</Button>
								</DialogClose>
							</DialogFooter>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</div>
		</>
	);
};

export default ScheduleFilterNavbar;

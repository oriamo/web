"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { db } from "@/firebase/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ScheduleEditProps, UpdateDataReal } from "@/types";

const formSchema = z.object({
	SchoolArea: z.string().min(2).max(50),
	Hall: z.string().min(2).max(50),
	Room: z.string().min(2).max(50),
	UnitType: z.string().max(3),
	CheckBox: z.boolean(),
	OperationStaffInitial: z.string().max(3),
	OrderNotes: z.string().max(3),
	First: z.string().max(50),
	Last: z.string().max(50),
	OrderId: z.string().max(50),
	StudentId: z.number(),
	AdminstrativeNotes: z.string().max(50),
	Batch: z.number(),
	Team: z.string().max(50),
	ProcessedDate: z.string().max(50),
	Load: z.string().max(50),
	Left: z.number(),
	Floor: z.number(),
	OperationsStaffNotes: z.string().max(50),
});

type AddNewRowProps = {
	fileDetails: string;
	isUpdate: boolean;
};
const AddNewRow = ({ fileDetails, isUpdate }: AddNewRowProps) => {
	const [rowValues, setrowValues] = useState<ScheduleEditProps>();
	const params = useParams<{ scheduleId: string }>();

	const fetchData = async () => {
		const ref = doc(db, "scheduleData", `${params.scheduleId}`);
		const snap = await getDoc(ref);

		if (snap.exists()) {
			const data = snap.data();
			if (data && data.data) {
				setrowValues(data.data);
			} else {
				console.log("No data found");
			}
		} else {
			console.log("Document does not exist");
		}
	};

	fetchData();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			SchoolArea: "",
			Hall: "",
			Room: "",
			CheckBox: false,
			OperationStaffInitial: "",
			OrderNotes: "",
			First: "",
			Last: "",
			OrderId: "",
			StudentId: 0,
			AdminstrativeNotes: "",
			Batch: 0,
			Team: "",
			ProcessedDate: "",
			Load: "",
			Left: 0,
			Floor: 0,
			OperationsStaffNotes: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		const createNewRow = async () => {
			const ref = doc(db, "scheduleData", `${params.scheduleId}`);
			const snap = await getDoc(ref);
			if (snap.exists()) {
				const data: UpdateDataReal = snap.data().data;
				console.log({ data, snap });

				// try {
				// 	await updateDoc(ref, {
				// 		data: updatedData,
				// 	});
				// } catch (error) {
				// 	console.log({ error });
				// }
			}
		};

		const updateRow = async () => {
			// get row data and instert to value,
			//  change the value and update
			console.log("working");

			const ref = doc(db, "scheduleData", `${params.scheduleId}`);
			const snap = await getDoc(ref);

			if (snap.exists()) {
				const index = parseInt(fileDetails) + 1;
				const scheduleKey: string = `schedule${index}`;
				try {
					const updateObject = { [scheduleKey]: values };
					await updateDoc(ref, updateObject);
					console.log({ updateObject, fileDetails });
				} catch (error) {
					console.log({ error });
				}
			}
		};

		if (isUpdate) {
			updateRow();
		} else {
			createNewRow();
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  ">
				<div className="grid grid-cols-2 gap-2">
					<FormField
						control={form.control}
						name="SchoolArea"
						render={({ field }) => (
							<FormItem>
								<FormLabel>School</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="Hall"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Hall</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="Room"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Room</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="OperationStaffInitial"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Operations Staff Initial</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};

export default AddNewRow;

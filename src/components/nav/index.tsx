import AllScheduleNavbar from "./AllScheduleNavbar";
import ScheduleFilterNavbar from "./ScheduleFilterNavbar";
import { NavProps } from "@/types";
function Nav<TData>({ table }: NavProps<TData>) {
	return (
		<>
			<AllScheduleNavbar table={table} />
			<ScheduleFilterNavbar />
		</>
	);
}

export default Nav;

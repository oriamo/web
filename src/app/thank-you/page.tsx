import Link from "next/link";

const ThankYou = () => {
	return (
		<div className="flex flex-col h-screen justify-center items-center">
			<h1 className="text-5xl ">Thank You</h1>
			<p className="text-slate-600">
				You can now login on the mobile app now follow{" "}
				<Link href="/">
					<span className="underline text-red-600 font-bold">here</span>
				</Link>{" "}
				{""}
				to download
			</p>
		</div>
	);
};

export default ThankYou;

import { Dispatch, SetStateAction, createContext, useContext } from "react";

type FileDataProps = {
	selectedTable: File[];
	setSelectedTable: Dispatch<SetStateAction<any>>;
};

export const SelectedDataContext = createContext<FileDataProps | undefined>(
	undefined
);

export const useSelectedTableData= () => {
	const context = useContext(SelectedDataContext);
	if (context === undefined) {
		throw new Error(
			"useSharedData must be used within a SharedDataContext Provider"
		);
	}
	return context;
};

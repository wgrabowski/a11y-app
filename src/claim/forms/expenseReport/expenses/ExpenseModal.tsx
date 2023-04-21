import { FormEvent, useState } from "react";
import { IncidentExpense } from "./model";

interface ExpenseModalProps {
	name?: string;
	price?: number;
	open: boolean;
	onSubmit: (val: IncidentExpense) => void;
	onClose: () => void;
}

export const ExpenseModal = ({
	name,
	open,
	price,
	onSubmit,
	onClose,
}: ExpenseModalProps) => {
	const [nameVal, setNameVal] = useState(name || "");
	const [priceVal, setPriceVal] = useState(price || "");
	const save = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit({ name: nameVal, price: Number(priceVal) });
	};

	return (
		<dialog open={open}>
			<button title="close modal" onClick={() => onClose()}>
				&times;
			</button>
			<form method={"?"} onSubmit={save}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					value={nameVal}
					id="name"
					onChange={(e) => setNameVal(e.target.value)}
					required={true}
				/>

				<label htmlFor="price">Price</label>
				<input
					type="text"
					name="price"
					id="price"
					onChange={(e) => setPriceVal(e.target.value)}
					required={true}
				/>

				<input type="reset" onClick={() => onClose} />
				<input type="submit" />
			</form>
		</dialog>
	);
};

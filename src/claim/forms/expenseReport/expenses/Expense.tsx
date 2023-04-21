import { IncidentExpense } from "./model";
import { useState } from "react";
import { ExpenseModal } from "./ExpenseModal";

interface ExpenseProps {
	name: string;
	price: number;
	onRemove: () => void;
	onEdit: (data: IncidentExpense) => void;
}
const currencyFormatter = new Intl.NumberFormat("en", {
	currency: "eur",
	style: "currency",
	minimumFractionDigits: 0,
});
export const Expense = ({ name, price, onRemove, onEdit }: ExpenseProps) => {
	const [editModalOpen, setEditModalOpen] = useState(false);

	return (
		<>
			<li className={"Expense"}>
				<strong>{currencyFormatter.format(price)}</strong>
				<span>{name}</span>
				<button onClick={() => onRemove()}>Remove</button>
				<button onClick={() => setEditModalOpen(true)}>Edit</button>
			</li>
			{editModalOpen && (
				<ExpenseModal
					open={true}
					onSubmit={onEdit}
					onClose={() => setEditModalOpen(false)}
				/>
			)}
		</>
	);
};

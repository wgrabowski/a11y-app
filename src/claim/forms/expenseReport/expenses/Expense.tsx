import { IncidentExpense } from "./model";
import { useState } from "react";
import { ExpenseModal } from "./ExpenseModal";
import { Edit, X } from "react-feather";
import "./Expense.css";
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
				<button className="icon" onClick={() => onRemove()}>
					<X />
				</button>
				<button
					className="icon"
					onClick={() => setEditModalOpen(true)}
					aria-haspopup={"dialog"}
				>
					<Edit />
				</button>
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

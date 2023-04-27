import { IncidentExpense } from "./model";
import { useState } from "react";
import { ExpenseModal } from "./ExpenseModal";
import { Edit, X } from "react-feather";
import "./Expense.css";
interface ExpenseProps {
	name: string;
	price: number;
	onRemove: () => void;
	onEdit: (data: any) => void;
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
				<strong title={"Expense price"}>
					{currencyFormatter.format(price)}
				</strong>
				<span>{name}</span>
				<button
					className="icon"
					onClick={() => onRemove()}
					title={"Remove this expense"}
				>
					<X role={"presentation"} />
				</button>
				<button
					className="icon"
					onClick={() => setEditModalOpen(true)}
					aria-haspopup={"dialog"}
					title={"Edit this expense"}
				>
					<Edit role={"presentation"} />
				</button>
			</li>
			{editModalOpen && (
				<ExpenseModal
					open={true}
					onSubmit={onEdit}
					name={name}
					price={price}
					onClose={() => setEditModalOpen(false)}
				/>
			)}
		</>
	);
};

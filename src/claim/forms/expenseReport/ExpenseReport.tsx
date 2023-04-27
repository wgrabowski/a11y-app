import "./ExpenseReport.css";
import { useState } from "react";
import { IncidentExpense } from "./expenses";
import { Expense } from "./expenses/Expense";
import { ExpenseModal } from "./expenses/ExpenseModal";
import { PlusCircle, X } from "react-feather";

interface ExpenseReportProps {
	onCompleted: (step: number) => void;
	onSubmit: () => void;
}

interface expenseFormValue {
	expenseName: string;
	expensePrice: string;
}
export const ExpenseReport = ({
	onCompleted,
	onSubmit,
}: ExpenseReportProps) => {
	const [addModalOpen, setAddModalOpen] = useState(false);
	const [expenses, setExpenses] = useState<IncidentExpense[]>([]);
	const [currentAlert, setCurrentAlert] = useState<string | null>();

	const removeExpense = (index: number) => {
		const newExpenses = [...expenses];
		newExpenses.splice(index, 1);
		setExpenses([...newExpenses]);
		setCurrentAlert(null);
		setCurrentAlert("Your expense has been successfully removed");
	};

	const addExpense = ({ expenseName, expensePrice }: expenseFormValue) => {
		setExpenses((expenses) => [
			...expenses,
			{
				name: expenseName,
				price: Number(expensePrice),
			},
		]);
		setAddModalOpen(false);
		setCurrentAlert(null);
		setCurrentAlert("Your expense has been successfully added");
	};

	const editExpense = (
		index: number,
		{ expenseName, expensePrice }: expenseFormValue
	) => {
		setExpenses((expenses) => [
			...expenses.map((exp, indx) =>
				indx === index
					? {
							name: expenseName,
							price: Number(expensePrice),
					  }
					: exp
			),
		]);
		setCurrentAlert(null);
		setCurrentAlert("Your expense has been successfully updated");
	};
	return (
		<>
			<h3>Expense report</h3>
			<ul>
				{expenses.map(({ name, price }, index) => {
					return (
						<Expense
							name={name}
							price={price}
							key={`${name}${price}${index}`}
							onEdit={(data) => editExpense(index, data)}
							onRemove={() => removeExpense(index)}
						/>
					);
				})}
			</ul>
			<button
				onClick={() => setAddModalOpen(true)}
				aria-haspopup={"dialog"}
				className={"secondary-button"}
				style={{ display: "flex", alignItems: "center", gap: "1rem" }}
			>
				<PlusCircle role={"presentation"} /> Add expense
			</button>
			{addModalOpen && (
				<ExpenseModal
					open={addModalOpen}
					onSubmit={addExpense}
					onClose={() => setAddModalOpen(false)}
				/>
			)}
			<div className="Form-actions">
				<button
					className={"secondary-button"}
					type={"button"}
					onClick={() => onCompleted(1)}
				>
					Return
				</button>
				<button onClick={() => onSubmit()}>Submit</button>
			</div>
			<div role="alert" aria-live="assertive" className={"Alert"}>
				{currentAlert && (
					<>
						<span>{currentAlert}</span>
						<button
							type={"button"}
							className="icon"
							title={"Close alert"}
							onClick={() => setCurrentAlert(null)}
						>
							<X role="presentation" />
						</button>
					</>
				)}
			</div>
		</>
	);
};

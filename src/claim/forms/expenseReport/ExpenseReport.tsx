import "./ExpenseReport.css";
import { useState } from "react";
import { IncidentExpense } from "./expenses";
import { Expense } from "./expenses/Expense";
import { ExpenseModal } from "./expenses/ExpenseModal";
import { PlusCircle, X } from "react-feather";

interface ExpenseReportProps {
	onCompleted: (step: boolean) => void;
}

export const ExpenseReport = ({ onComplete }: ExpenseReportProps) => {
	const [addModalOpen, setAddModalOpen] = useState(false);
	const [expenses, setExpenses] = useState<IncidentExpense[]>([]);
	const [currentAlert, setCurrentAlert] = useState<string | null>();

	const removeExpense = (index: number) => {
		const newExpenses = [...expenses];
		newExpenses.splice(index, 1);
		setExpenses([...newExpenses]);
		setCurrentAlert("Your expense has been successfully removed");
	};

	const addExpense = (expense: IncidentExpense) => {
		setExpenses((expenses) => [...expenses, expense]);
		setAddModalOpen(false);
		setCurrentAlert("Your expense has been successfully added");
	};

	const editExpense = (index: number, expense: IncidentExpense) => {
		setExpenses((expenses) => [
			...expenses.map((exp, indx) => (indx === index ? expense : exp)),
		]);
		setCurrentAlert("Your expense has been successfully updated");
	};
	return (
		<>
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
					Back
				</button>
				<button onClick={onSubmit()}>Next</button>
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

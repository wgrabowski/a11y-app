import { useEffect, useState } from "react";
import { IncidentExpense } from "./expenses";
import { Expense } from "./expenses/Expense";
import { ExpenseModal } from "./expenses/ExpenseModal";

export const ExpenseReport = () => {
	const [addModalOpen, setAddModalOpen] = useState(false);
	const [expenses, setExpenses] = useState<IncidentExpense[]>([
		{ name: "obraz", price: 300 },
	]);

	const removeExpense = (index: number) => {
		const newExpenses = [...expenses];
		newExpenses.splice(index, 1);
		setExpenses([...newExpenses]);
	};

	const addExpense = (expense: IncidentExpense) => {
		setExpenses((expenses) => [...expenses, expense]);
	};

	const editExpense = (index: number, expense: IncidentExpense) => {
		setExpenses((expenses) => [
			...expenses.map((exp, indx) => (indx === index ? expense : exp)),
		]);
	};
	return (
		<>
			<ul>
				<li>{expenses.length}</li>
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
			<button onClick={() => setAddModalOpen(true)}>ADd expense</button>
			{addModalOpen && (
				<ExpenseModal
					open={addModalOpen}
					onSubmit={addExpense}
					onClose={() => setAddModalOpen(false)}
				/>
			)}
		</>
	);
};

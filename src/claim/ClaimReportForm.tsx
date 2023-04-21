import "./forms/forms.css";
import { Stepper } from "./stepper";
import { IncidentDetails, PersonalDetails } from "./forms";
import { ExpenseReport } from "./forms/expenseReport/ExpenseReport";

export const ClaimReportForm = () => {
	return (
		<Stepper stepTitles={["Personal", "Twoja stara", "Expense"]}>
			<PersonalDetails />
			<IncidentDetails />
			<ExpenseReport />
		</Stepper>
	);
};

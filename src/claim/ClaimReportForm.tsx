import "./forms/forms.css";
import { Stepper } from "./stepper";
import { IncidentDetails, PersonalDetails } from "./forms";
import { ExpenseReport } from "./forms/expenseReport/ExpenseReport";
import { useState } from "react";

export const ClaimReportForm = () => {
	const [firstStepValid, setFirstStepValid] = useState(false);
	const [secondStepValid, setSecondStepValid] = useState(false);
	const [submittedStep, setSubmittedStep] = useState<number | null>(null);

	const submitAll = () => {};

	return (
		<>
			<Stepper
				stepTitles={[
					"Step 1 - Personal Details",
					"Step 2 - Incident Details",
					"Step 3 - Expense Report",
				]}
				startingStep={0}
				form1Valid={firstStepValid || true}
				form2Valid={secondStepValid || true}
				submittedStep={submittedStep}
			>
				<PersonalDetails
					onValidityChange={(valid) => {
						setFirstStepValid(valid);
					}}
					onCompleted={() => setSubmittedStep(1)}
				/>
				<IncidentDetails
					onCompleted={(step) => setSubmittedStep(step)}
					onValidityChange={(valid) => {
						setSecondStepValid(valid);
					}}
				/>
				<ExpenseReport
					onCompleted={(step) => setSubmittedStep(step)}
					onSubmit={() => submitAll()}
				/>
			</Stepper>
		</>
	);
};

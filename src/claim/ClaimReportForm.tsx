import "./forms/forms.css";
import { Stepper } from "./stepper";
import { IncidentDetails, PersonalDetails } from "./forms";
import { ExpenseReport } from "./forms/expenseReport/ExpenseReport";
import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

export const ClaimReportForm = () => {
	const go = useNavigate();
	const [firstStepValid, setFirstStepValid] = useState(false);
	const [secondStepValid, setSecondStepValid] = useState(false);
	const [submittedStep, setSubmittedStep] = useState<number | null>(null);

	const submitAll = () => {
		go({ pathname: "/report-added", search: "?title=Claim report added" });
	};

	return (
		<>
			<Stepper
				stepTitles={[
					"Step 1 - Personal Details",
					"Step 2 - Incident Details",
					"Step 3 - Expense Report",
				]}
				startingStep={0}
				form1Valid={firstStepValid}
				form2Valid={secondStepValid}
				submittedStep={submittedStep}
			>
				<PersonalDetails
					onValidityChange={(valid) => {
						setFirstStepValid(valid);
					}}
					onCompleted={() => {
						if (firstStepValid) {
							setSubmittedStep(1);
						}
					}}
				/>
				<IncidentDetails
					onCompleted={(step) => {
						if (step === 0 || secondStepValid) {
							setSubmittedStep(step);
						}
					}}
					onValidityChange={(valid) => {
						console.log(valid);
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

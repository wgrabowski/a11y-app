import { ReactNode, Ref, useEffect, useRef, useState } from "react";
import "./Stepper.css";

interface StepperProps {
	children: ReactNode[];
	stepTitles: string[];
	startingStep: number;
	form1Valid: boolean;
	form2Valid: boolean;
	submittedStep: number | null;
}

export const Stepper = ({
	stepTitles,
	children,
	startingStep = 0,
	form1Valid,
	form2Valid,
	submittedStep,
}: StepperProps) => {
	const [currentStep, setCurrentStep] = useState(startingStep);
	const tab1Ref = useRef(null);
	const tab2Ref = useRef(null);
	const tab3Ref = useRef(null);
	const refs = [tab1Ref, tab2Ref, tab3Ref];
	const focusStep = (index: number) => {
		(refs[index].current as any)?.focus();
	};

	const canStepBeEntered = (stepIndex: number): boolean => {
		switch (stepIndex) {
			case 1:
				return form1Valid;
			case 2:
				return form2Valid;
			default:
				return true;
		}
	};

	useEffect(() => {
		console.log(currentStep, submittedStep);
		if (submittedStep !== null && canStepBeEntered(submittedStep)) {
			setCurrentStep(submittedStep);
		}
	}, [submittedStep]);

	useEffect(() => {
		focusStep(currentStep);
	}, [currentStep]);

	return (
		<div>
			<div
				role={"tablist"}
				aria-label={"Claim form steps"}
				className="StepList"
			>
				{stepTitles.map((child, index) => {
					return (
						<div
							tabIndex={currentStep === index ? 0 : -1}
							aria-selected={currentStep === index}
							role={"tab"}
							onClick={() =>
								canStepBeEntered(index) ? setCurrentStep(index) : ""
							}
							className={"StepList-step"}
							ref={refs[index]}
							onFocus={(event) => {
								event.preventDefault();
								return canStepBeEntered(index);
							}}
							onKeyUp={(event) => {
								if (event.key === "Enter" && canStepBeEntered(index)) {
									setCurrentStep(index);
								}
								if (
									event.key === "ArrowLeft" &&
									canStepBeEntered(Math.max(index - 1, 0))
								) {
									focusStep(Math.max(index - 1, 0));
								}

								if (
									event.key === "ArrowRight" &&
									canStepBeEntered(Math.max(index + 1, 0))
								) {
									focusStep(Math.min(index + 1, stepTitles.length));
								}
							}}
							key={index}
							aria-controls={`step-${index}-content`}
						>
							{child}
						</div>
					);
				})}
			</div>
			{children.map((child, index) => {
				return (
					<div
						role="tabpanel"
						hidden={index !== currentStep}
						key={index}
						id={`step-${index}-content`}
					>
						{child}
					</div>
				);
			})}
		</div>
	);
};

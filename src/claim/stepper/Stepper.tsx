import { ReactNode, useState } from "react";
import { Step } from "./Step";

interface StepperProps {
	children: ReactNode[];
	stepTitles: string[];
}

export const Stepper = ({ stepTitles, children }: StepperProps) => {
	const [currentStep, setCurrentStep] = useState(0);
	return (
		<div>
			{stepTitles.map((child, index) => {
				return (
					<button
						type={"button"}
						onClick={() => setCurrentStep(index)}
						key={index}
					>
						{child}
					</button>
				);
			})}

			{children.map((child, index) => {
				return (
					<div hidden={index !== currentStep} key={index}>
						{child}
					</div>
				);
			})}
		</div>
	);
};

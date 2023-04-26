import "./ErrorMessage.css";
import { FieldError } from "react-hook-form";

interface FieldErrorProps {
	error: FieldError | any;
}

export const ErrorMessage = ({ error }: FieldErrorProps) => {
	return (
		<div className="ErrorMessage" role="alert" aria-live="assertive">
			{error?.message}
		</div>
	);
};

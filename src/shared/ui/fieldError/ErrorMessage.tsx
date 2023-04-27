import "./ErrorMessage.css";
import { FieldError } from "react-hook-form";

interface FieldErrorProps {
	error: FieldError | any;
	id: string;
}

export const ErrorMessage = ({ error, id }: FieldErrorProps) => {
	return (
		<div className="ErrorMessage" role="alert" aria-live="assertive" id={id}>
			{error?.message}
		</div>
	);
};

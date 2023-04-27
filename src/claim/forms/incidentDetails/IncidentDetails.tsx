import { Fragment } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "../../../shared/ui/fieldError/ErrorMessage";

interface IncidentDetailsProps {
	onCompleted: (step: number) => void;
	onValidityChange: (valid: boolean) => void;
}

export const IncidentDetails = ({
	onCompleted,
	onValidityChange,
}: IncidentDetailsProps) => {
	const purposes = [
		"tourism",
		"study/mental work",
		"physical work",
		"high-risk sport",
	];
	const schema = yup
		.object({
			purpose: yup.string().required("Select purpose of travel"),
			country: yup
				.string()
				.required("Name of country in which incident happened cannot be empty"),
			address: yup.string().required("Address of incident cannot be empty"),
			date: yup.string().required("Date of incident has to be selected"),
			description: yup
				.string()
				.required("Description of incident cannot be empty"),
		})
		.required();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid, dirtyFields },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data: any) => {
		onCompleted(2);
	};
	return (
		<form
			onChange={() => {
				onValidityChange(isValid);
			}}
			spellCheck={"false"}
		>
			<fieldset>
				<legend>Purpose of travel</legend>
				{purposes.map((value, index) => {
					return (
						<Fragment key={index}>
							<input
								type="radio"
								{...register("purpose")}
								id={`purpose${index}`}
								defaultChecked={index === 0}
							/>
							<label htmlFor={`purpose${index}`}>{value}</label>
						</Fragment>
					);
				})}
			</fieldset>

			<label htmlFor="country">country</label>
			<input
				type="text"
				{...register("country")}
				id="country"
				aria-invalid={!!errors?.country}
				autoComplete={"country"}
				aria-describedby={"error-country"}
			/>
			<ErrorMessage error={errors.country} id={"error-country"} />

			<label htmlFor="address">address</label>
			<input
				type="text"
				{...register("address")}
				id="address"
				aria-invalid={!!errors?.address}
				autoComplete={"street-address"}
				aria-describedby={"error-address"}
			/>
			<ErrorMessage error={errors.address} id={"error-address"} />

			<label htmlFor="date">date</label>
			<input
				type="date"
				{...register("date")}
				id="date"
				aria-invalid={!!errors?.date}
				aria-describedby={"error-date"}
			/>
			<ErrorMessage error={errors.date} id={"error-date"} />

			<label htmlFor="description">Incident description</label>
			<textarea
				{...register("description")}
				id="description"
				cols={30}
				rows={10}
				aria-invalid={!!errors?.description}
				aria-describedby={"error-description"}
			/>
			<ErrorMessage error={errors.description} id={"error-description"} />

			<div className={"Form-actions"}>
				<button
					className={"secondary-button"}
					type={"button"}
					onClick={() => onCompleted(0)}
				>
					Return
				</button>
				<button onClick={handleSubmit(onSubmit)}>Continue</button>
			</div>
		</form>
	);
};

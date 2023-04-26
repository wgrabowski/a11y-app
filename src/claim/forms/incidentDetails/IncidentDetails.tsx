import { Fragment } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
			country: yup.string().required("Enter your last name"),
			address: yup.string().required(),
			date: yup.string().email("Enter you email address"),
			description: yup.string(),
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
		console.log(data);
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
								aria-invalid={!!errors?.purpose}
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
			/>

			<label htmlFor="address">address</label>
			<input
				type="text"
				{...register("address")}
				id="address"
				aria-invalid={!!errors?.address}
				autoComplete={"street-address"}
			/>

			<label htmlFor="date">date</label>
			<input
				type="date"
				{...register("date")}
				id="date"
				aria-invalid={!!errors?.date}
			/>

			<label htmlFor="description">Incident description</label>
			<textarea
				{...register("description")}
				id="description"
				cols={30}
				rows={10}
				aria-invalid={!!errors?.description}
			/>

			<div className={"Form-actions"}>
				<button
					className={"secondary-button"}
					type={"button"}
					onClick={() => onCompleted(0)}
				>
					Back
				</button>
				<button onClick={handleSubmit(onSubmit)}>Next</button>
			</div>
		</form>
	);
};

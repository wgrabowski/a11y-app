import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../../shared/ui/fieldError/ErrorMessage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
interface PersonalDetailsProps {
	onValidityChange: (valid: boolean) => void;
	onCompleted: () => void;
}

export const PersonalDetails = ({
	onValidityChange,
	onCompleted,
}: PersonalDetailsProps) => {
	const schema = yup
		.object({
			firstName: yup.string().required("First name cannot be empty"),
			lastName: yup.string().required("First name cannot be empty"),
			birthday: yup.string().required("Birthday date has to be selected"),
			email: yup.string().email("Valid email address have to be provided"),
			phone: yup.string(),
			policy: yup.string(),
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
		onCompleted();
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			onChange={() => {
				onValidityChange(isValid);
			}}
			spellCheck={"false"}
		>
			<label htmlFor="first-name">First name</label>
			<input
				type="text"
				id="first-name"
				{...register("firstName")}
				aria-required={"true"}
				aria-invalid={!!errors?.firstName}
				autoComplete={"given-name"}
				aria-describedby={"error-firstname"}
			/>
			<ErrorMessage error={errors.firstName} id={"error-firstname"} />

			<label htmlFor="second-name">Second name</label>
			<input
				type="text"
				id="second-name"
				{...register("lastName")}
				aria-required={"true"}
				aria-invalid={!!errors?.lastName}
				autoComplete={"family-name"}
				aria-describedby={"error-lastname"}
			/>
			<ErrorMessage error={errors.lastName} id={"error-lastname"} />

			<label htmlFor="birthday">Birthday</label>
			<input
				type="date"
				min={"1900-01-01"}
				{...register("birthday")}
				id="birthday"
				aria-invalid={!!errors?.birthday}
				aria-describedby={"error-birthday"}
				autoComplete={"bday"}
			/>
			<ErrorMessage error={errors.birthday} id={"error-birthday"} />

			<label htmlFor="phone-number">Phone number</label>
			<input
				type="tel"
				id="phone-number"
				{...register("phone")}
				aria-invalid={!!errors?.phone}
				autoComplete={"tel"}
				aria-describedby={"error-phone"}
			/>
			<ErrorMessage error={errors.phone} id={"error-phone"} />

			<label htmlFor="email">Email</label>
			<input
				type="email"
				id="email"
				required
				{...register("email")}
				aria-invalid={!!errors?.email}
				autoComplete={"email"}
				aria-describedby={"error-email"}
			/>
			<ErrorMessage error={errors.email} id={"error-email"} />

			<label htmlFor="policy">Policy number</label>
			<input
				type="text"
				id="policy"
				{...register("policy")}
				aria-invalid={!!errors?.policy}
				aria-describedby={"error-policy"}
			/>
			<ErrorMessage error={errors.policy} id={"error-policy"} />

			<div className={"Form-actions"}>
				<button onClick={handleSubmit(onSubmit)}>Continue</button>
			</div>
		</form>
	);
};

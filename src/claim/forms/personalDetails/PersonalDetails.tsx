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
			firstName: yup.string().required("Enter your first name"),
			lastName: yup.string().required("Enter your last name"),
			birthday: yup.string(),
			email: yup.string().email("Enter you email address"),
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
			/>
			<ErrorMessage error={errors.firstName} />

			<label htmlFor="second-name">Second name</label>
			<input
				type="text"
				id="second-name"
				{...register("lastName")}
				aria-required={"true"}
				aria-invalid={!!errors?.lastName}
				autoComplete={"family-name"}
			/>
			<ErrorMessage error={errors.lastName} />

			<label htmlFor="birthday">Birthday</label>
			<input
				type="date"
				{...register("birthday")}
				id="birthday"
				aria-invalid={!!errors?.birthday}
			/>
			<ErrorMessage error={errors.birthday} />

			<label htmlFor="phone-number">Phone number</label>
			<input
				type="tel"
				id="phone-number"
				{...register("phone")}
				aria-invalid={!!errors?.phone}
				autoComplete={"phone"}
			/>
			<ErrorMessage error={errors.birthday} />

			<label htmlFor="email">Email</label>
			<input
				type="email"
				id="email"
				required
				{...register("email")}
				aria-invalid={!!errors?.email}
				autoComplete={"email"}
			/>
			<ErrorMessage error={errors.email} />

			<label htmlFor="policy">Policy number</label>
			<input
				type="text"
				id="policy"
				{...register("policy")}
				aria-invalid={!!errors?.policy}
			/>
			<ErrorMessage error={errors.policy} />

			<div className={"Form-actions"}>
				<button onClick={handleSubmit(onSubmit)}>Next</button>
			</div>
		</form>
	);
};

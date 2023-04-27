import "./ExpenseModal.css";
import { FormEvent, useRef, useState } from "react";
import { IncidentExpense } from "./model";
import { X } from "react-feather";
import FocusTrap from "focus-trap-react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "../../../../shared/ui/fieldError/ErrorMessage";

interface ExpenseModalProps {
	name?: string;
	price?: number;
	open: boolean;
	onSubmit: (val: any) => void;
	onClose: () => void;
}

export const ExpenseModal = ({
	name,
	open,
	price,
	onSubmit,
	onClose,
}: ExpenseModalProps) => {
	const schema = yup
		.object({
			expenseName: yup.string().required("Name of expense cannot be empty"),
			expensePrice: yup.string().required("Price of expense cannot be empty"),
		})
		.required();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid, dirtyFields },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			expenseName: name ?? "",
			expensePrice: price?.toString() ?? "",
		},
	});
	const onSave = (data: any) => {
		onSubmit(data);
	};

	return (
		<FocusTrap active={open}>
			<dialog open={open} className={"ExpenseModal"}>
				<button
					className={"ExpenseModal-closeButton"}
					title="Close modal"
					onClick={() => onClose()}
					aria-label={"Close modal"}
				>
					<X role={"presentation"} />
				</button>
				<form method={"?"} onSubmit={handleSubmit(onSave)}>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						{...register("expenseName")}
						aria-required={true}
						aria-describedby={"error-expense-name"}
					/>
					<ErrorMessage error={errors.expenseName} id={"error-expense-name"} />

					<label htmlFor="price">Price</label>
					<input
						type="number"
						id="price"
						step={"0.01"}
						min={"0"}
						{...register("expensePrice")}
						aria-required={true}
						aria-describedby={"error-expense-price"}
					/>
					<ErrorMessage
						error={errors.expensePrice}
						id={"error-expense-price"}
					/>
					<div className={"Form-actions"}>
						<button
							type={"button"}
							onClick={() => onClose()}
							className={"secondary-button"}
						>
							Cancel
						</button>
						<button type={"submit"} onClick={handleSubmit(onSave)}>
							Save
						</button>
					</div>
				</form>
			</dialog>
		</FocusTrap>
	);
};

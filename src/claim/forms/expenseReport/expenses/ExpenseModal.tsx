import "./ExpenseModal.css";
import { FormEvent, useRef, useState } from "react";
import { IncidentExpense } from "./model";
import { X } from "react-feather";
import FocusTrap from "focus-trap-react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface ExpenseModalProps {
	name?: string;
	price?: number;
	open: boolean;
	onSubmit: (val: IncidentExpense) => void;
	onClose: () => void;
}

export const ExpenseModal = ({
	name,
	open,
	price,
	onSubmit,
	onClose,
}: ExpenseModalProps) => {
	const [nameVal, setNameVal] = useState(name || "");
	const [priceVal, setPriceVal] = useState(price || "");
	const save = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit({ name: nameVal, price: Number(priceVal) });
	};

	const schema = yup
		.object({
			name: yup.string().required("Enter your first name"),
			price: yup.number().required("Enter your last name"),
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
	const onSave = (data: any) => {
		console.log(data);
		onSubmit(data);
	};

	return (
		<FocusTrap active={open}>
			<dialog tabIndex={0} open={open} className={"ExpenseModal"}>
				<button
					className={"ExpenseModal-closeButton"}
					title="Close modal"
					onClick={() => onClose()}
					aria-label={"Close modal"}
					autoFocus
				>
					<X role={"presentation"} />
				</button>
				<form method={"?"} onSubmit={handleSubmit(onSave)}>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						{...register("name")}
						aria-required={true}
					/>

					<label htmlFor="price">Price</label>
					<input
						type="number"
						id="price"
						{...register("price")}
						aria-required={true}
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

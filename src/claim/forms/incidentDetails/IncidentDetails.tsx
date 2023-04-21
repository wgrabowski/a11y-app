import { Fragment } from "react";

export const IncidentDetails = () => {
	const purposes = [
		"tourism",
		"study/mental work",
		"physical work",
		"high-risk sport",
	];
	return (
		<form>
			<fieldset>
				<legend>Purpose of travel</legend>
				{purposes.map((value, index) => {
					return (
						<Fragment key={index}>
							<input
								type="radio"
								name="purpose"
								id={`purpose${index}`}
								defaultChecked={index === 0}
							/>
							<label htmlFor={`purpose${index}`}>{value}</label>
						</Fragment>
					);
				})}
			</fieldset>
			<label htmlFor="country">country</label>
			<input type="text" name="country" id="country" />

			<label htmlFor="address">address</label>
			<input type="text" name="address" id="address" />

			<label htmlFor="date">date</label>
			<input type="date" name="date" id="date" />

			<label htmlFor="description">Incident description</label>
			<textarea name="description" id="description" cols={30} rows={10} />
		</form>
	);
};

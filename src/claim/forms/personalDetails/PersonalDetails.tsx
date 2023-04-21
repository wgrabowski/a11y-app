export const PersonalDetails = () => {
	return (
		<form>
			<label htmlFor="first-name">First name</label>
			<input type="text" name="first-name" id="first-name" />

			<label htmlFor="second-name">Second name</label>
			<input type="text" name="second-name" id="second-name" />

			<label htmlFor="birthday">Birthday</label>
			<input type="date" name="birthday" id="birthday" />

			<label htmlFor="phone-number">Phone number</label>
			<input type="tel" name="phone-number" id="phone-number" />

			<label htmlFor="email">Email</label>
			<input type="email" name="email" id="email" />

			<label htmlFor="policy">Policy number</label>
			<input type="text" name="policy" id="policy" />
		</form>
	);
};

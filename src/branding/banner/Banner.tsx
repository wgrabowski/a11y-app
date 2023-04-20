import "./Banner.css";
export const Banner = () => {
	return (
		<section className={"Banner"}>
			<h2 className={"Banner-title"}>Travel Insurance</h2>
			<p className={"Banner-text"}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna.
			</p>
			<button role="button" type="button" className={"Banner-action"}>
				Order now
			</button>
		</section>
	);
};

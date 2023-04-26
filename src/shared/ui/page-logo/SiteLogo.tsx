import "./SiteLogo.css";
import { NavLink } from "react-router-dom";

export const PageLogo = () => {
	return (
		<h1 className={"SiteLogo"}>
			<img src="public/vite.svg" alt="" className={"SiteLogo-image"} />
			<NavLink to={"/"} className={"SiteLogo-link"}>
				TheInsurer
			</NavLink>
		</h1>
	);
};

import "./SiteLogo.css";
import { NavLink } from "react-router-dom";
import { Sunrise } from "react-feather";

export const PageLogo = ({ level = 1 }: { level: 1 | 2 }) => {
	const content = (
		<>
			<Sunrise role={"presentation"} color={"#1d70b8"} />
			<NavLink to={"/"} className={"SiteLogo-link"}>
				TheInsurer
			</NavLink>
		</>
	);
	return (
		<>
			{level === 1 && <h1 className={"SiteLogo"}>{content}</h1>}
			{level === 2 && <h2 className={"SiteLogo"}>{content}</h2>}
		</>
	);
};

import "./SiteLogo.css";
import { NavLink } from "react-router-dom";

export const PageLogo = ({ level = 1 }: { level: 1 | 2 }) => {
	let content = (
		<>
			<img src="public/vite.svg" alt="" className={"SiteLogo-image"} />
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

import "./Header.css";
import { NavLink } from "react-router-dom";
import { PageLogo } from "../../ui/page-logo/SiteLogo";
export const Header = () => {
	return (
		<header className="Page-header">
			<PageLogo />
			<nav className={"Page-headerNav"}>
				<NavLink className="Page-headerNavLink" to={"/"}>
					Insurance
				</NavLink>
				<NavLink className="Page-headerNavLink" to={"/about"}>
					About us
				</NavLink>
				<NavLink className="Page-headerNavLink" to={"/report"}>
					Claim report
				</NavLink>
				<NavLink className="Page-headerNavLink" to={"/contact"}>
					Contact
				</NavLink>
			</nav>
		</header>
	);
};

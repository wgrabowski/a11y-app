import "./Header.css";
import { NavLink } from "react-router-dom";
import { PageLogo } from "../../ui/page-logo/SiteLogo";
import { Container } from "../container/Container";
export const Header = () => {
	return (
		<header className="Page-header" role="banner" aria-label={"Page header"}>
			<Container className="Page-headerContent">
				<PageLogo />
				<nav className={"Page-headerNav"} aria-label={"Main"}>
					<NavLink className="Page-headerNavLink" to={"/"}>
						Insurance
					</NavLink>
					<NavLink
						className="Page-headerNavLink"
						to={{ pathname: "/page/about", search: "?title=About us" }}
					>
						About us
					</NavLink>
					<NavLink className="Page-headerNavLink" to={"/report"}>
						Claim report
					</NavLink>
					<NavLink
						className="Page-headerNavLink"
						to={{ pathname: "/page/contact", search: "?title=Contact" }}
					>
						Contact
					</NavLink>
				</nav>
			</Container>
		</header>
	);
};

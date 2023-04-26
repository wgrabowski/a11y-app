import "./Footer.css";
import { PageLogo } from "../../ui/page-logo/SiteLogo";
import { Container } from "../container/Container";
import { Link } from "react-router-dom";
export const Footer = () => {
	const bottomLinks = [
		["Newsroom", "Careers", "Our story", "Customer Stories"],
		[
			"Vacation/Holiday",
			"Student",
			"Mission",
			"Marine Captain/Crew",
			"Employer/Business travel",
		],
		["Forms library", "Find a Doctor", "Renew Policy", "Claims center"],
	];
	const linkList = (links: string[]) => (
		<ul>
			{links.map((link) => (
				<li>
					<Link
						to={{
							pathname: `/page/${link
								.replaceAll(" ", "-")
								.replaceAll("/", "-")}`,
							search: `?title=${link}`,
						}}
					>
						{link}
					</Link>
				</li>
			))}
		</ul>
	);
	return (
		<footer
			className="Page-footer"
			role="contentinfo"
			aria-label={"Page footer"}
		>
			<Container className="Page-footerContent">
				<div className="Page-footerBranding">
					<PageLogo />
				</div>
				<nav className="Page-footerNav" aria-labelledby={"aboutus-links"}>
					<h3 id="aboutus-links">About us</h3>
					{linkList(bottomLinks[0])}
				</nav>
				<nav className="Page-footerNav" aria-labelledby={"products-links"}>
					<h3 id="products-links">Products</h3>
					{linkList(bottomLinks[1])}
				</nav>
				<nav className="Page-footerNav" aria-labelledby={"members-links"}>
					<h3 id="members-links">Members</h3>
					{linkList(bottomLinks[2])}
				</nav>
			</Container>
		</footer>
	);
};

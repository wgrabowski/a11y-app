import { NavLink } from "react-router-dom";
import { Container } from "../shared/layout/container/Container";

export const ClaimSubmitted = () => {
	return (
		<Container>
			<h2>Claim confirmation</h2>
			<p>Your claim has been saved</p>
			<p>
				You can now{" "}
				<NavLink to={{ pathname: "/report", search: "?title=Claim report" }}>
					submit another claim
				</NavLink>{" "}
				or{" "}
				<NavLink to={{ pathname: "/", search: "?title=" }}>
					check our offer
				</NavLink>
			</p>
		</Container>
	);
};

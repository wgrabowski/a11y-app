import "./ContactUs.css";
import { Container } from "../../shared/layout/container/Container";

export const ContactUs = () => {
	return (
		<section>
			<Container className={"ContactUs-content"}>
				<div>
					<h2 className={"ContactUs-title"}>
						Are you looking for an insurance?
					</h2>
					<span>Contact us to order now</span>
				</div>
				<div>
					<a
						href="tel:5555555555"
						className={"button secondary-button"}
						title={"Call 5555555555 number"}
					>
						Call us
					</a>
					<a
						href="mailto: mail@example.com"
						className={"button"}
						title={"Send email to mail@example.com"}
					>
						Send a message
					</a>
				</div>
			</Container>
		</section>
	);
};

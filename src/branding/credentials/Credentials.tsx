import "./Credentials.css";
import { Container } from "../../shared/layout/container/Container";
export const Credentials = () => {
	return (
		<section className="Credentials">
			<Container>
				<blockquote className="Credentials-quote">
					"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
					eiusmod tempor incidunt."
					<cite className="Credentials-cite">
						<figure className="Credentials-author">
							<img
								className="Credentials-authorPhoto"
								src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200"
								alt="Donald Duck photo"
							/>
							<figcaption className="Credentials-authorName">
								Donald Duck, CEO of Disney
							</figcaption>
						</figure>
					</cite>
				</blockquote>
			</Container>
		</section>
	);
};

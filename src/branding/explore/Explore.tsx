import "./Explore.css";
import { Container } from "../../shared/layout/container/Container";
export const Explore = () => {
	const images = [
		{
			url: "https://picsum.photos/seed/explore1/400",
			title: "Renting Vacation Homes",
		},
		{
			url: "https://picsum.photos/seed/explore2/400",
			title: "Trends & Predictions",
		},
		{
			url: "https://picsum.photos/seed/explore3/400",
			title: "Popular Travel Destinations for 2021",
		},
		{
			url: "https://picsum.photos/seed/explore4/400",
			title: "Travel Gear for Safe Travels in 2021",
		},
	];
	return (
		<section className={"Explore"}>
			<Container className={"Explore-content"}>
				<h2>Explore our travel topics</h2>

				<div className="Explore-features">
					{images.map(({ url, title }, index) => (
						<figure key={index} className="Explore-feature">
							<img src={url} alt={title} className="Explore-featurePhoto" />
							<figcaption className="Explore-featureTitle">
								<strong>{title}</strong>
							</figcaption>
						</figure>
					))}
				</div>
			</Container>
		</section>
	);
};

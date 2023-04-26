import "./Story.css";
import { Container } from "../../shared/layout/container/Container";
export const Story = () => {
	return (
		<Container>
			<section className={"Story"}>
				<img
					src="https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
					alt={""}
					className={"Story-image"}
				/>
				<div className={"Story-caption"}>
					<h2>Insurance for International Visitors</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna.
					</p>
					<ul>
						<li>list item #1</li>
						<li>list item #2</li>
						<li>list item #3</li>
					</ul>
				</div>
			</section>
			<section className={"Story"}>
				<img
					src="https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
					alt={""}
					className={"Story-image"}
				/>
				<div className={"Story-caption"}>
					<h2>Safe travels</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
						dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna.
					</p>
				</div>
			</section>
		</Container>
	);
};

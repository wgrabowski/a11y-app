import "./Story.css";
export const Story = () => {
	return (
		<>
			<figure className={"Story"}>
				<img
					src="https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
					alt={""}
					className={"Story-image"}
				/>
				<figcaption className={"Story-caption"}>
					<h3>Insurance for International Visitors</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna.
					</p>
					<ul>
						<li>list item #1</li>
						<li>list item #2</li>
						<li>list item #3</li>
					</ul>
				</figcaption>
			</figure>
			<figure className={"Story"}>
				<img
					src="https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
					alt={""}
					className={"Story-image"}
				/>
				<figcaption className={"Story-caption"}>
					<h3>Safe travels</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
						dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna.
					</p>
				</figcaption>
			</figure>
		</>
	);
};

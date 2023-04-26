import { useSearchParams } from "react-router-dom";
import { Container } from "../shared/layout/container/Container";
import { useEffect } from "react";

export const OtherView = () => {
	const [searchParams] = useSearchParams();
	const title = searchParams.get("title");
	useEffect(() => {
		document.title = `TheInsurer: ${title}`;
	}, [title]);
	return (
		<Container>
			<h2>{title}</h2>
			<p>This is "{title?.toLowerCase()}" page</p>
		</Container>
	);
};

import { ClaimReportForm } from "../claim";
import { Container } from "../shared/layout/container/Container";

export const ClaimReportView = () => {
	return (
		<Container>
			<h2 id={"claims-header"} style={{ margin: "0 auto" }}>
				Claim report
			</h2>
			<ClaimReportForm />
		</Container>
	);
};

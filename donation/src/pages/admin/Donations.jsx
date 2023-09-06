import { DonationsTable } from "../../components";
import { Page } from "../../components";

export function Donations () {
	return (
		<Page requiresLogin>
			<DonationsTable />
		</Page>
	)
};

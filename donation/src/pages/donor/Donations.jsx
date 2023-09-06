import { Page, MyDonationsTable } from "../../components/";

export function Donations () {
	return (
		<Page requiresLogin>
			<MyDonationsTable/>
		</Page>
	);
};

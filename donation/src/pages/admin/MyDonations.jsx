import { MyDonationsTable, Page } from "../../components/";

export function MyDonations () {

	return (
		<Page requiresLogin>
			<MyDonationsTable/>
		</Page>
	);
};

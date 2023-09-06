import { BreakdownChart, Page } from "../../components";

export function Home () {
	return (
		<Page requiresLogin>
			<BreakdownChart />
		</Page>
	);
};

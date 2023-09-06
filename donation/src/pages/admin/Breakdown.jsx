import { BreakdownChart, Page, DisbursementForm } from "../../components";

export const Breakdown = () => {
	return (
		<Page requiresLogin>
			<BreakdownChart />
			<DisbursementForm />
		</Page>
	)
};

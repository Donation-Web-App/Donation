import { BreakdownChart, Page, DisbursementForm } from "../../components";

export const Breakdown = () => {
  return (
    <Page requiresLogin>
      <div className="h-full w-full flex flex-col items-center">
        <BreakdownChart />
        <DisbursementForm />
      </div>
    </Page>
  );
};

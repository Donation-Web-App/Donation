import { RecordDonationForm } from "../../components";
import { Page } from "../../components";

export function Home() {
  return (
    <Page requiresLogin>
      <div className="h-full flex justify-center items-center">
        <RecordDonationForm />
      </div>
    </Page>
  );
}

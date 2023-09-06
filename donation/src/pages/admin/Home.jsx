import { RecordDonationForm } from "../../components";
import { Page } from "../../components";

export function Home () {

    return (
        <Page requiresLogin className="h-full flex items-center">
            <RecordDonationForm/>
        </Page>
    )
}
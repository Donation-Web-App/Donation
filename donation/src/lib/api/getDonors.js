import { authenticatedFetch } from "../utils";

export async function getDonors() {
    const options = {
        method: "get",
        url: "/api/v2/user/all"
    };
    
    const { data: { donors } } = await authenticatedFetch(options);

    return donors;
}
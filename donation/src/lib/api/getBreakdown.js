import { authenticatedFetch } from "../utils";

export async function getBreakdown() {
    const options = {
        method: 'get',
        url: '/api/v2/donations/breakdown'
    }

    const { data: { breakdown } } = await authenticatedFetch(options);
    return breakdown;
}
import { authenticatedFetch } from "../utils";

export async function recordDisbursement(amount) {
    const options = {
        method: 'patch',
        url: '/api/v2/donations/breakdown/disburse',
        data: { amount }
    }

    return await authenticatedFetch(options);
}
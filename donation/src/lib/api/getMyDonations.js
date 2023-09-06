import { authenticatedFetch } from "../utils"

export async function getMyDonations () {
    const options = {
        method: 'get',
        url: '/api/v2/user/me/donations'
    }

    const { data: { donations } } = await authenticatedFetch(options);

    return donations;
}
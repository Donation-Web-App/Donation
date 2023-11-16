import { authenticatedFetch } from "../utils";

export async function recordDonation(userId, amount, date) {
  const options = {
    method: "post",
    url: "/api/v2/user/donations/add",
    data: date ? { userId, amount, date } : { userId, amount },
  };

  const response = await authenticatedFetch(options);
  return response;
}

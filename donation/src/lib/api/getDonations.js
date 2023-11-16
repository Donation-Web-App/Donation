import { authenticatedFetch } from "../utils";

export async function getDonations() {
  const options = {
    method: "get",
    url: "/api/v2/donations",
  };

  const {
    data: { donations },
  } = await authenticatedFetch(options);

  return donations;
}

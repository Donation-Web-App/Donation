import { formatDate } from "../../lib/utils";

export function formatDonations({ donations, donors }) {
  // Creating an array of formatted donations
  const formattedDonations = [];

  // Creating a hash map of donor ids to donor names
  const donorsHashMap = {};
  for (const donor of donors) {
    donorsHashMap[donor._id] = `${donor.firstname} ${donor.lastname}`;
  }

  // Loop through each donations formatting it
  for (const donation of donations) {
    // Creating a formattedDonation for that donation
    const formattedDonation = [
      formatDate(donation.date),
      donation.userId
        ? donorsHashMap[donation.userId]
        : donorsHashMap[donation.donor_id],
      donation.amount,
    ];

    // Adding the formattedDonation to list of formattedDonations
    formattedDonations.push(formattedDonation);
  }

  return formattedDonations;
}

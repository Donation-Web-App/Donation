import { getDonations, getDonors } from "../lib/api";
import { formatDonations } from "../lib/utils";
import { useEffect, useState } from "react";
import { Table } from ".";

export function DonationsTable() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [rows, setRows] = useState([]);

  const emptyState = <div>Looks like you haven't recorded any donations.</div>;

  function getData() {
    Promise.all([getDonations(), getDonors()])
      .then(([donations, donors]) => {
        const rows = formatDonations({ donations, donors });
        // Set the rows while they are reversed so that the data is ordered in reverse chronological order
        setRows(rows.reverse());
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      });
  }

  useEffect(getData, []);

  // If the data is still being loaded from the API
  if (loading) {
    return <div>Loading</div>;
  }

  // If there is an error
  else if (error) {
    return <div>Something went wrong</div>;
  }

  // Then we have donations and we display them
  else {
    return (
      <Table
        headings={["Date", "Donor", "Amount"]}
        data={rows}
        emptyState={emptyState}
      />
    );
  }
}

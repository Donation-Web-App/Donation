import CurrencyFormat from "react-currency-format";
import { getMyDonations } from "../lib/api";
import { useState, useEffect } from "react";
import { formatDate } from "../lib/utils";
import { Table } from ".";

export function MyDonationsTable() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [rows, setRows] = useState([]);
  const emptyState = <div>Looks like you do not have any donations.</div>;

  function getData() {
    getMyDonations()
      .then((myDonations) => {
        const rows = [];

        // Formatting the date to be more readable
        for (const donation of myDonations) {
          const row = [
            donation.date ? formatDate(donation.date) : "",
            <CurrencyFormat
              value={donation.amount}
              displayType="text"
              prefix=""
              thousandSeparator={true}
            />,
          ];

          rows.push(row);
        }

        setRows(rows.reverse());
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }

  useEffect(getData, []);

  // If the data is still loading
  if (loading) {
    return <div>Loading</div>;
  }

  // If an error was raised
  else if (error) {
    return <div>Something went horribly wrong</div>;
  }

  // If the list of donations contains some values
  else {
    return (
      <Table
        data={rows}
        headings={["Date", "Amount (NGN )"]}
        emptyState={emptyState}
      />
    );
  }
}

import { getDonors, getDonations } from "../lib/api";
import { formatDonations } from "../lib/utils";
import { useEffect, useState } from "react";
import { Table } from "."

export function DonationsTable () {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
    const [rows, setRows] = useState([]);

    const emptyState = (<div>Looks like you haven't recorded any donations.</div>)

    // Function that gets donors and donations
    async function getDonationsAndDonors() {

        // TODO: Fetching data does not have to be sequential
		const donations = await getDonations();
		const donors = await getDonors();

		return { donations, donors };
	}

    function populateData() {
		getDonationsAndDonors()
			.then((response) => {
				console.log(response);
				const rows = formatDonations(response);
				setRows(rows);
				setLoading(false);
			})
			.catch((e) => {
				console.log(e);
				setError(true);
			})	
	}

    useEffect(populateData, []);

    // If the data is still being loaded from the API
	if (loading) {
		return (
			<div>Loading</div>
		);

	// If there is an error
	} else if (error) {
		return (
			<div>Something went wrong</div>
		)
	} 

	// Then we have donations and we display them
	else {
		return (
			<Table 
                headings={['Date', 'Donor', 'Amount']}
                rows={rows}
                emptyState={emptyState}
            />
		)
	}
}
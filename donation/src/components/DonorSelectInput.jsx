import { useState, useEffect } from "react";
import { getDonors } from "../lib/api";
import Select from "react-select";

export function DonorSelectInput({ onChange, selectedDonor }) {
  const [donors, setDonors] = useState([]);
  const [error, setError] = useState(false);

  function populateDonors() {
    getDonors()
      .then((donors) => {
        setDonors(
          donors.map(({ _id, firstname, lastname }) => ({
            value: _id,
            label: `${firstname} ${lastname}`,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }

  useEffect(populateDonors, []);

  if (error) {
    return <div> Something went wrong and we are unable to list donors.</div>;
  } else {
    return (
      <div>
        <label className="text-sm">Donor</label>
        <Select options={donors} onChange={onChange} value={selectedDonor} />
      </div>
    );
  }
}

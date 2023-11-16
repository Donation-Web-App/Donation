import { DonorSelectInput, SubmitInput, TextInput, Form } from ".";
import { recordDonation } from "../lib/api";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export function RecordDonationForm() {
  const [amount, setAmount] = useState(0);
  const [donorId, setDonorId] = useState("");
  const [date, setDate] = useState("");
  const [donorName, setDonorName] = useState("");
  const [formActive, setFormActive] = useState(true);

  async function handleSubmit(e) {
    if (!formActive) return;
    e.preventDefault();
    if (donorId && amount) {
      confirmAlert({
        title: "Record Donation",
        message: `Are you sure you want to record a donation by ${donorName} for NGN${amount}?`,
        buttons: [
          {
            label: "Record Donation",
            onClick: async () => {
              setFormActive(false);
              toast("Recording donation...");
              try {
                const response = await recordDonation(donorId, amount, date);
                toast(response.message);
              } catch (e) {
                toast(e.response.data.message);
              } finally {
                setAmount(0);
                setDonorId("");
                setDonorName("");
                setDate("");
                setFormActive(true);
              }
            },
          },
          {
            label: "Cancel",
            onClick: () => {},
          },
        ],
      });
    } else {
      toast("Please supply both the donor and amount.");
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <DonorSelectInput
        value={donorId}
        onChange={({ value, label }) => {
          setDonorId(value);
          setDonorName(label);
        }}
      />
      <TextInput
        label="Amount"
        placeholder="Enter the donated amount"
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <TextInput
        label="Date (optional)"
        placeholder="Date"
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />
      <SubmitInput label="Record donation" active={formActive} />
    </Form>
  );
}

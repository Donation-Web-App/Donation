import { DonorSelectInput, SubmitInput, TextInput, Form } from ".";
import { recordDonation } from "../lib/api";
import { toast } from "react-hot-toast";
import { useState } from "react";

export function RecordDonationForm() {
  const [amount, setAmount] = useState("");
  const [donor, setDonor] = useState("");
  const [date, setDate] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // TODO: Add form validation
    if (donor && amount) {
      toast("Recording donation...");
      try {
        const response = await recordDonation(donor, amount, date);
        toast(response.message);
      } catch (e) {
        toast(e.response.data.message);
      }
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <DonorSelectInput onChange={({ value }) => setDonor(value)} />
      <TextInput
        label="Amount"
        placeholder="Enter the donated amount"
        type="number"
        onChange={(e) => setAmount(e.target.value)}
      />
      <TextInput
        label="Date (optional)"
        placeholder="Date"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <SubmitInput label="Record donation" />
    </Form>
  );
}

import { recordDisbursement } from "../lib/api";
import toast from "react-hot-toast";
import { useState } from "react";
import { TextInput, SubmitInput, Form } from ".";

export function DisbursementForm() {
  const [amount, setAmount] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();

    if (amount) {
      toast("Recording disbursement...");
      try {
        const response = await recordDisbursement(amount);
        toast(response.message);
      } catch (error) {
        console.log(error);
        toast("Something went wrong.");
      }
    } else {
      toast("Please enter a non-zero amount.");
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-xl text-center">Disbursed lately? How much?</h2>
      <TextInput
        placeholder="Enter amount"
        label="Amount Disbursed"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <SubmitInput label="Record" />
    </Form>
  );
}

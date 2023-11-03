import { recordDisbursement } from "../lib/api";
import { confirmAlert } from "react-confirm-alert";
import toast from "react-hot-toast";
import { useState } from "react";
import { TextInput, SubmitInput, Form } from ".";
import "react-confirm-alert/src/react-confirm-alert.css";

export function DisbursementForm() {
  const [amount, setAmount] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    if (amount) {
      confirmAlert({
        title: "Record Disbursement",
        message: `Are you sure you want to record a disbursement of ${amount}?`,
        buttons: [
          {
            label: "Record",
            onClick: async () => {
              toast("Recording disbursement...");
              try {
                const response = await recordDisbursement(amount);
                toast(response.message);
              } catch (error) {
                console.log(error);
                toast("Something went wrong.");
              }
            },
          },
          {
            label: "Cancel",
          },
        ],
      });
      setAmount(0);
    } else {
      toast("Please enter a non-zero amount.");
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-xl text-center">Disbursed lately? How much?</h2>
      <TextInput
        value={amount}
        placeholder="Enter amount"
        label="Amount Disbursed"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <SubmitInput label="Record" />
    </Form>
  );
}

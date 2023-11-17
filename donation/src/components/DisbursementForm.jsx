import { recordDisbursement } from "../lib/api";
import { confirmAlert } from "react-confirm-alert";
import toast from "react-hot-toast";
import { useState } from "react";
import { CurrencyInput, SubmitInput, Form } from ".";
import "react-confirm-alert/src/react-confirm-alert.css";

export function DisbursementForm() {
  const [amount, setAmount] = useState(0);
  const [formActive, setFormActive] = useState(true);
  const [formattedAmount, setFormattedAmount] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formActive) return;

    if (amount) {
      confirmAlert({
        title: "Record Disbursement",
        message: `Are you sure you want to record a disbursement of ${formattedAmount}?`,
        buttons: [
          {
            label: "Record",
            onClick: async () => {
              setFormActive(false);
              toast("Recording disbursement...");
              try {
                const response = await recordDisbursement(amount);
                toast(response.message);
              } catch (error) {
                console.log(error);
                toast("Something went wrong.");
              } finally {
                setFormActive(true);
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
      <CurrencyInput
        label="Amount Disbursed"
        value={amount}
        onValueChange={({ value, formattedValue }) => {
          setAmount(value);
          setFormattedAmount(formattedValue);
        }}
      />
      <SubmitInput label="Record" active={formActive} />
    </Form>
  );
}

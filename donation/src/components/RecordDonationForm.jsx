import { DonorSelectInput, SubmitInput, TextInput } from ".";
import { recordDonation } from "../lib/api";
import { toast } from "react-hot-toast";
import { useState } from "react";


export function RecordDonationForm() {
    const [amount, setAmount] = useState('');
    const [donor, setDonor] = useState('');
    const [date, setDate] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        // TODO: Add form validation
        if (donor && amount && date) {
            toast("Recording donation...")
            try {
                const response = await recordDonation(donor, amount, date);
                console.log(response);
                toast(response.message)
            } catch (e) {
                console.log(e);
                // toast(e.response.data.message)
            }
        }
    }
    return (
        <form className="w-formWidth mx-auto" onSubmit={handleSubmit}>
            <DonorSelectInput onChange={({ value }) => setDonor(value)}/>
            <br/>
            <TextInput 
                label="Amount"
                placeholder="Enter the donated amount"
                type="number"
                onChange={(e) => setAmount(e.target.value)}
            />
            <br/>
            <TextInput
                label="Date (optional)"
                placeholder="Date"
                type="date" 
                onChange={(e) => setDate(e.target.value)}
            />
            <br/>
            <SubmitInput label="Record donation"/>
        </form>
    )
}
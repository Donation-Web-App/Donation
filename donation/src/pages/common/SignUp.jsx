import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Page, TextInput, SubmitInput } from "../../components";
import { phone } from "phone";
import toast from "react-hot-toast";
import axios from "axios";

export function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formActive, setFormActive] = useState(true);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // If the form is not active, we do nothing
    if (!formActive) return;

    if (
      firstName &&
      lastName &&
      email &&
      password &&
      confirmPassword &&
      phoneNumber
    ) {
      if (phone(phoneNumber).isValid) {
        const options = {
          method: "post",
          url: "/api/v2/auth/signup",
          data: {
            firstname: firstName,
            lastname: lastName,
            email,
            password,
            confirmPassword,
            phoneNumber,
          },
        };

        try {
          setFormActive(false);
          const response = await axios.request(options);

          if (response.data.status == "success") {
            toast("Account created successfully.");
            navigate("/login");
          } else {
            toast("Something went wrong");
          }
        } catch (error) {
          setFormActive(true);
          toast(error.response.data.message);
        }
      } else {
        toast(
          "Your phone number is invalid. Please re-enter it with the plus sign and International Code"
        );
      }
    }
  }

  return (
    <Page>
      <div className="h-screen w-full flex items-center justify-center">
      <form
        className="w-full max-w-narrowWidth mx-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center font-bold">
          Welcome to{" "}
          <span className="text-btn-color text-primary">CACSA-UI Donation</span>
        </h1>
        <br />
        <TextInput
          type="text"
          label="First Name:"
          placeholder="Enter your first name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <br />
        <TextInput
          type="text"
          label="Last Name:"
          placeholder="Enter your last name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <br />
        <TextInput
          type="email"
          label="Email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <TextInput
          type="tel"
          label="WhatsApp Phone Number"
          placeholder="+12124567890"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />
        <br />
        <TextInput
          type="password"
          label="Password"
          placeholder="Enter a password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <TextInput
          type="password"
          label="Confirm password"
          placeholder="Confirm your password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <br />
        <SubmitInput label="Create an account" active={formActive} />
        <br />
        <p className="text-center">
          Have an account?
          <Link className="text-primary" to="/login">
            {" "}
            Log In{" "}
          </Link>
        </p>
      </form>
      </div>
    </Page>
  );
}

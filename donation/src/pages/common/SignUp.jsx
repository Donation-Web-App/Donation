import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Page, TextInput, SubmitInput } from "../../components";
import toast from "react-hot-toast";
import axios from "axios";

export function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    if (firstName && lastName && email && password && confirmPassword) {
      e.preventDefault();

      const options = {
        method: "post",
        url: "/api/v2/auth/signup",
        data: {
          firstname: firstName,
          lastname: lastName,
          email,
          password,
          confirmPassword,
        },
      };

      try {
        const response = await axios.request(options);

        if (response.data.status == "success") {
          toast("Account created successfully.");
          navigate("/login");
        } else {
          toast("Something went wrong");
        }
      } catch (error) {
        toast(error.response.data.message);
      }
    }
  }

  return (
    <Page>
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
        <SubmitInput label="Create an account" />
        <br />
        <p className="text-center">
          Have an account?
          <Link className="text-primary" to="/login">
            {" "}
            Log In{" "}
          </Link>
        </p>
      </form>
    </Page>
  );
}

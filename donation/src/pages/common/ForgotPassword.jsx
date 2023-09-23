import { TextInput, SubmitInput, Page } from "../../components";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { host, port } = window.location;
  const redirect = `https://${host}${port ? ":port" : ""}/reset`;

  async function handleSubmit(e) {
    e.preventDefault();

    if (email) {
      const options = {
        method: "patch",
        url: "/api/v2/auth/forgotPassword",
        data: {
          email,
          redirect,
        },
      };

      const response = await axios.request(options);

      if (response.data.status == "success") {
        toast("Reset link will be sent to your email shortly.");
        setEmail("");
      } else {
        toast("Something went wrong trying to reset your password");
      }
    } else {
      toast("Please supply an email");
    }
  }

  return (
    <Page>
      <form
        className="w-formWidth mx-auto w-full max-w-narrowWidth"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center">Forgot password</h1>
        <br></br>
        <TextInput
          label="Email"
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <br />
        <SubmitInput />
      </form>
    </Page>
  );
}

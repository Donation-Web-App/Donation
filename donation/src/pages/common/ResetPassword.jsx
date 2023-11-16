import { TextInput, SubmitInput, Page } from "../../components";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export function ResetPassword() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formActive, setFormActive] = useState(true);

  const token = searchParams.get("token");

  const loginUrl = `https://${window.location.host}/login`;

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formActive) return;

    if (password == confirmPassword) {
      const options = {
        method: "patch",
        url: "/api/v2/auth/resetpassword/",
        data: {
          token,
          loginUrl,
          password,
          confirmPassword,
        },
      };

      try {
        setFormActive(false);
        const response = await axios.request(options);
        toast(response.data.message);
        setSearchParams({});
        navigate("/login");
      } catch (e) {
        console.log(e);
        toast(e.response.data.message);
      } finally {
        setFormActive(true);
      }
    } else {
      toast("Passwords must match");
    }
  }
  return (
    <Page>
      <form
        className="w-full max-w-narrowWidth mx-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center">Request reset password</h1>
        <br />
        <TextInput
          label="Enter Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <TextInput
          label="Confirm password"
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <br />
        <SubmitInput label="Reset Password" active={formActive} />
      </form>
    </Page>
  );
}

import { Link, useNavigate } from "react-router-dom";
import { Form, TextInput, SubmitInput } from ".";
import { login } from "../lib/api";
import { storeCredentials } from "../lib/utils";
import { useState } from "react";
import toast from "react-hot-toast";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    toast("Logging you in...");
    e.preventDefault();

    try {
      const { token, firstname, role } = await login(email, password);
      storeCredentials(token, firstname, role);

      // Redirect the user based on their role
      navigate(role == "admin" ? "/admin/home" : "/donor/home");
    } catch (error) {
      toast(
        "Couldn't log you in. Please check your details and connection and try again."
      );
      console.log(error);
    }
  }

  return (
    <Form onSubmit={handleLogin}>
      <h1 className="text-3xl text-center">
        Welcome to{" "}
        <span className="text-primary font-bold">CACSA-UI Donation</span>
      </h1>
      <TextInput
        type="email"
        placeholder="Enter your email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />

      <TextInput
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            onClick={() => setShowPassword((current) => !current)}
          />
          <p> {showPassword ? "Hide" : "Show"} Password </p>
        </div>
        <Link to="/forgot">Forgot Password?</Link>
      </div>
      <br />
      <SubmitInput label="Login" />
      <p className="text-center mt-5">
        Don't have an account?
        <Link to="/signup"> Sign Up </Link>
      </p>
    </Form>
  );
}

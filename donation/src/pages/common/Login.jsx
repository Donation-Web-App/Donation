import { Link, useNavigate } from "react-router-dom";
import { TextInput, SubmitInput, Page } from "../../components";
import { useState } from "react";
import axios from "axios";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const url = "/api/v2/auth/login";
      const body = { email, password };
      const options = {
        method: "post",
        url: url,
        data: body,
      };
      const response = await axios.request(options);

      if (response.data.status == "success") {
        // Extract token and firstname and user role from response data
        const {
          token,
          user: { role, firstname },
        } = response.data.data;

        // Token expires in 30 days
        // Setting 60 seconds to conservatively factor in latency
        const tokenExpiration = Date.now() + 30 * 24 * 60 * 60 * 1000 - 60000;

        // Store token and credentials
        window.localStorage.setItem("tokenValue", token);
        window.localStorage.setItem("firstName", firstname);
        window.localStorage.setItem("userRole", role);
        window.localStorage.setItem("tokenExpiration", tokenExpiration);

        // Redirect the user based on their role
        navigate(role == "admin" ? "/admin/home" : "/donor/home");
      }
    } catch (error) {
      // Find a better way to handle errors
      console.log(error);
    }
  }

  return (
    <Page>
      <form className="w-formWidth mx-auto" onSubmit={handleLogin}>
        <h1 className="text-3xl text-center">
          Welcome to <span className="text-primary font-bold">CACSA-UI</span>
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
        <br />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              onClick={() => setShowPassword((current) => !current)}
            />
            <p> {showPassword ? "Hide" : "Show"} Password </p>
          </div>
          <div>Forgot Password?</div>
        </div>
        <br />
        <SubmitInput label="Login" />
        <p className="text-center mt-5">
          Don't have an account?
          <Link to="/signup"> Sign Up </Link>
        </p>
      </form>
    </Page>
  );
}

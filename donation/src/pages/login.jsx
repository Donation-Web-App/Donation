/** @format */

import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
// import useAuth  from "../context/authProvider";

//API URL
const API_BASE_URL = "http://localhost:4040/api/v2/auth/login";

export const Login = () => {
	//STATES
	const [value, setValue] = useState({
		email: "",
		password: "",
	});
	const [show, setShow] = useState(false);

	//HOOKS
	const navigate = useNavigate();

	// const { login } = useAuth();

	//LOGIC TO HANDLE CHANGE IN FORM FIELD
	const handleChange = (e) => {
		setValue({ ...value, [e.target.name]: e.target.value });
	};

	//LOGIC TO SHOW PASSWORD
	const showPassword = () => {
		setShow(!show);
	};

	//LOGIC TO SUBMIT FORM
	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(value);

		try {
			const response = await axios.post(`${API_BASE_URL}`, { ...value });

			let token = response.data.token;

			//LOG RESULT
			console.log(response);
			// console.log(response.data.data.user);
			console.log(response.data.data.token);

			//DESTRUCTURE USER DATA
			const { firstname, lastname, email, role } = response.data.data.user;
			const data = { firstname, lastname, email, role };

			//STORE TOKEN IN COOKIE
			if (token) {
				//store the received JWT in the client-side application
			}
			Cookies.set("jwt", response.data.token, { expires: 7 }); // Expires in 7 days
			navigate("/home", { state: data });
		} catch (error) {
			console.log(error.response);
		}
	};

	return (
		<div className='h-screen flex items-center justify-center'>
			<div className='flex flex-col'>
				<h1 className=' text-2xl text-center mb-20'>
					<b>
						Welcome to{" "}
						<span className='text-btn-color font-black'>CACSA-UI</span>
					</b>
				</h1>
				<form
					method='POST'
					className='flex flex-col gap-10'
					onSubmit={handleSubmit}
				>
					<input
						type='email'
						name='email'
						placeholder='email'
						onChange={handleChange}
						value={value.email}
					/>
					<input
						type={show ? "text" : "password"}
						name='password'
						id='password'
						placeholder='Input Password'
						value={value.password}
						onChange={handleChange}
					/>

					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-2'>
							<input type='checkbox' onClick={showPassword} />
							<p> Show Password </p>
						</div>

						<div className='forgotpass'>Forgot Password?</div>
					</div>

					<button className='border-2 border-gray-300 rounded-md w-96 h-12 bg-btn-color text-white mb-5'>
						Sign In
					</button>
				</form>

				<button className='border-2 border-btn-color rounded-md w-96 h-11 text-btn-color'>
					Continue with google
				</button>

				<p className='text-center mt-5'>
					Don't have an account?
					<Link to='/signup'> Sign Up </Link>
				</p>
			</div>
		</div>
	);
};


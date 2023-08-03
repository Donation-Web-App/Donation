/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import axios from "axios";

// INPUT FIELD DATA

// const data = [
// 	{
// 		type: "text",
// 		name: "firstname",
// 		placeholder: "First Name",
// 	},
// 	{
// 		type: "text",
// 		name: "lastname",
// 		placeholder: "Last Name",
// 	},

// 	{
// 		type: "email",
// 		name: "email",
// 		placeholder: "E-mail",
// 	},

// 	{
// 		type: "password",
// 		name: "password",
// 		placeholder: "Password",
// 	},
// 	{
// 		type: "password",
// 		name: "confirmpassword",
// 		placeholder: "Confirm Password",
// 	},
// ];

const url = "http://localhost:4040/api/v2/auth/signup";

export const SignUp = () => {
	const [value, setValue] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

const navigate = useNavigate();


	const handleChange = (e) => {
		setValue({ ...value, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(url, { ...value });

			console.log(response.data.data.user);
			navigate("/login");
		} catch (error) {
			console.log(error.response);
		}
	};

	return (
		<div className='w-full h-screen flex items-center justify-center'>
			<div className='flex flex-col gap-5'>
				<h1 className=' text-2xl text-center mb-10'>
					<b>
						Welcome to{" "}
						<span className='text-btn-color font-black'>CACSA-UI</span>
					</b>
				</h1>

				<form className='flex flex-col gap-10' onSubmit={handleSubmit}>
					<input
						type='text'
						name='firstname'
						placeholder='First Name'
						onChange={handleChange}
						value={value.firstname}
					/>
					<input
						type='text'
						name='lastname'
						placeholder='Last Name'
						onChange={handleChange}
						value={value.lasttname}
					/>
					<input
						type='email'
						name='email'
						placeholder='abc@gmail.com'
						onChange={handleChange}
						value={value.email}
					/>
					<input
						type='password'
						name='password'
						placeholder='Enter a Password'
						onChange={handleChange}
						value={value.password}
					/>
					<input
						type='password'
						name='confirmPassword'
						placeholder='Confirm Your Password'
						onChange={handleChange}
						value={value.confirmpassword}
					/>

					<button className='border-2 border-gray-300 rounded-md w-96 h-12 bk-#0a4c2d bg-btn-color text-white'>
						{" "}
						Sign Up
					</button>

					<button className='border-2 border-btn-color rounded-md w-96 h-11 text-btn-color'>
						Sign Up with google
					</button>
				</form>

				<p className='text-center'>
					Have and account?
					<Link to='/login'> Log In </Link>
				</p>
			</div>
		</div>
	);
};






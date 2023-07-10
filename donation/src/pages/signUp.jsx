/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/input";

// INPUT FIELD DATA
let id = 0;

const data = [
	{ type: "text", name: "firstname", placeholder: "First Name" },
	{
		type: "text",
		name: "lastname",
		placeholder: "Last Name",
	},

	{
		type: "email",
		name: "email",
		placeholder: "E-mail",
	},

	{
		type: "password",
		name: "password",
		placeholder: "Password",
	},
	{
		type: "password",
		name: "confirm password",
		placeholder: "Confirm Password",
	},
];

function SignUp() {
	// const [value, setValue] = useState("");
	// const handleChange = (e) => {
	// 	e.preventDefault();
	// 	setValue(...value, [(data.name = e.target.value)]);
	// };
	return (
		<div className='w-full h-screen flex items-center justify-center'>
			<div className='flex flex-col gap-5'>
				<h1 className=' text-2xl text-center mb-10'>
					<b>
						Welcome to{" "}
						<span className='text-btn-color font-black'>CACSA-UI</span>
					</b>
				</h1>
				{data.map((item) => {
					return (
						<Input
							type={item.type}
							name={item.name}
							placeholder={item.placeholder}
							key={id++}
						/>
					);
				})}

				<button className='border-2 border-gray-300 rounded-md w-96 h-10 bk-#0a4c2d bg-btn-color text-white'>
					{" "}
					Sign Up
				</button>
				<button className='border-2 border-btn-color rounded-md w-96 h-10 text-btn-color'>
					Sign Up with google
				</button>

				<p className='text-center'>
					Have and account?
					<Link to='/login'> Log In </Link>
				</p>
			</div>
		</div>
	);
}

export default SignUp;

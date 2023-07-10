/** @format */

import React, { useState } from "react"; 
import { Link } from 'react-router-dom'
import Input from "../components/input"

// INPUT FIELD DATA

const data = [
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
];

function Login() {
	let id = 0;
	const [value, setValue] = useState("");
	const handleChange = (e) => {
		e.preventDefault();
		setValue(...value, [(data.name = e.target.value)]);
	};
	return (
		<div className='h-screen flex items-center justify-center'>
			<div className='flex flex-col gap-5'>
				<h1 className=' text-2xl text-center mb-10'>
					<b>
					
						Welcome to <span className='text-btn-color font-black'>CACSA-UI</span>
					</b>
				</h1>
				{data.map((item) => {
					return (
						<Input
							type={item.type}
							name={item.name}
							placeholder={item.placeholder}
							key={id++}
							// onChange={handleChange}
							// value={data.name}
						/>
					);
				})}

				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-2'>
						<input type='checkbox' />
						<p> Show Password </p>
					</div>

					<div className='forgotpass'>Forgot Password?</div>
				</div>

				<button className='border-2 border-gray-300 rounded-md w-96 h-10 bg-btn-color text-white'>
					Sign In
				</button>

				<button className='border-2 border-btn-color rounded-md w-96 h-10 text-btn-color'>
					Continue with google
				</button>

				<p className='text-center mt-5'>
					Don't have an account?
					<Link to='/signup'> Sign Up </Link>
				</p>
			</div>
		</div>
	);
}

export default Login;

/** @format */

import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import user from "../assets/user.png";
import donationimg from "../assets/Donation-image.svg";

import HomeSideBar from "../components/homeSideBar";
import DonationsSideBar from "../components/donationSideBar";
import LogOut from "../components/logout";

//AXIOS INTERCEPTOR

export const Home = () => {
	const location = useLocation();
	const data = location.state;

	const { firstname, lastname, token } = data;
	

	const navigate = useNavigate();

	const [value, setValue] = useState({
		amount: "",
		date: "",
	});

	const finalData = { ...data, ...value };
	console.log(finalData);

	axios.interceptors.request.use(
		(config) => {
			console.log(token);
			config.headers.authorization = `Bearer ${token}`;

			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	// LOGIC
	const handleChange = (e) => {
		setValue({ ...value, [e.target.name]: e.target.value });
		// value.amount = parseInt(value.amount);
	};
	// console.log(value);

	const handleSubmit = async (e) => {
		const url = "http://localhost:4040/api/v2/user/notify";
		const int = parseInt(value.amount);
		value.amount = int;

		e.preventDefault();
		try {
			const response = await axios.post(url, { ...value });
			if (response.status === 200 && value.amount !== "NaN") {
				console.log(response);
				console.log("sent");
				navigate("/donations", { state: finalData});
			}
			{
				// navigate("/home", { state: data });
			}
		} catch (error) {
			console.log(error);
		}
		
	};

	return (
		<div className='homecontainer'>
			<div className="sidebar min-h-screen font-['Raleway']">
				<h1>CACSA-UI</h1>

				<div className='mt-20 sidenavbar flex flex-col justify-between gap-10'>
					<HomeSideBar />
					<DonationsSideBar />

					<div className='mt-auto'>
						<LogOut />
					</div>
				</div>
			</div>
			<div className='rightsidebar'>
				<div className='headercontainer'>
					<div className='header'>
						<h1>
							Welcome {lastname} {firstname},
						</h1>

						<div className='w-20'>
							<img src={user} alt='' />
						</div>
					</div>
				</div>

				<div className='mb-5 donation flex flex-col items-center justify-center'>
					<div className='mt-2 dimg mb-5'>
						<img src={donationimg} alt='' />
					</div>

					<h2 className='text-2xl'>Just Made a donation ?</h2>
					<p>Notify the Admin</p>
				</div>

				<form
					method='POST'
					className='flex flex-col items-center justify-center gap-1'
					onSubmit={handleSubmit}
				>
					<div className='donate flex flex-col'>
						<label htmlFor='amount' className='text-left'>
							{" "}
							Amount:{" "}
						</label>
						<input
							type='number'
							name='amount'
							placeholder='Donation Amount'
							onChange={handleChange}
							value={value.amount}
							className='h-12 border-2 border-gray-300 mb-5 rounded-md'
						/>
					</div>

					<div className='donate flex flex-col'>
						<label htmlFor='date' className='text-left'>
							{" "}
							Date:{" "}
						</label>
						<input
							type='date'
							name='date'
							onChange={handleChange}
							value={value.date}
							className='h-12 border-2 border-gray-300 mb-5 rounded-md'
						/>
					</div>

					<button className=' s-btn border-2 border-gray-300 rounded-md h-12 bg-btn-color text-white mb-5'>
						Submit
					</button>
				</form>
			</div>

			{/* <h2>ayoola</h2> */}
		</div>
	);
};

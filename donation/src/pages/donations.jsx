/** @format */

import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import user from "../assets/user.png";
import donationimg from "../assets/Donation-image.svg";

import HomeSideBar from "../components/homeSideBar";
import DonationsSideBar from "../components/donationSideBar";
import LogOut from "../components/logout";
import { getItem } from "localforage";

export const Donations = () => {
	const [data, setData] = useState([]);
	const location = useLocation();
	const list = location.state;

	const { firstname, lastname, token, amount, date } = list;

	console.log(list);

	useEffect(() => {
const newData = { amount, date, firstname };
setData([data, newData]);
console.log(data);
	},[list])

	
	// setData([...arrayList]);

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
					<h2 className='text-2xl mt-5'>Your Donations Record</h2>

					{}
					<table>
						<thead>
							<tr>
								<th>Date</th>
								<th>Donor</th>
								<th>Amount</th>
							</tr>
						</thead>

						<tbody>
							{
								<tr>
									<td>{amount}</td>
									<td>{firstname}</td>
									<td>{date}</td>
								</tr>
							}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

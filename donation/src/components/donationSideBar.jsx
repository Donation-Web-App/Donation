/** @format */

import React from "react";
import { ReactComponent as Like } from "../assets/like-dislike.svg";
import { Link } from "react-router-dom";

const DonationsSideBar = () => {
	return (
		<div>
			<div className='flex items-center gap-2'>
				<Like />
				<Link to='/mydonations' className='font-[500]'>
					Donations
				</Link>
			</div>
		</div>
	);
};

export default DonationsSideBar;

/** @format */

import React from "react";
import {Link} from 'react-router-dom'
import { ReactComponent as HomeI } from "../assets/home-2.svg";
import { ReactComponent as DonateI } from "../assets/donate.svg";
import { ReactComponent as Activity } from "../assets/activity.svg";
import { ReactComponent as HistoryI } from "../assets/timer.svg";
import { ReactComponent as Like } from "../assets/like-dislike.svg";

export const NavBar = () => {
	return (
		<div>
			<h1>CACSA-UI</h1>

			<div>
				<HomeI />
				<Link to='/home'>Home</Link>
			</div>

			<div>
				<Activity />
				<Link to='/breakdown'>Breakdown</Link>
			</div>

			<div>
				<Like />
				<Link to='/donations'>Donations</Link>
			</div>

			<div>
				<HistoryI />
				<Link to='/history'>History</Link>
			</div>

			<div>
				<Like />

				<Link to='/mydonations'>My Donations</Link>
			</div>
		</div>
	);
};

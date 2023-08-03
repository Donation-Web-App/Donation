/** @format */

import React from "react";
import { ReactComponent as LogOut } from "../assets/logout.svg";
import { Link } from "react-router-dom";

const LogOutComp = () => {
	return (
		<div>
			<div className='flex items-center gap-2 absolute bottom-20'>
				<LogOut />
				<Link to='' className='font-[500]'>
					Logout
				</Link>
			</div>
		</div>
	);
};

export default LogOutComp;

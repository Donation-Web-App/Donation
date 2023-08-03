import React from 'react'
import { ReactComponent as HomeI } from "../assets/home-2.svg";
import { Link } from 'react-router-dom'

const HomeSideBar = () => {
  return (
		<div>
			<div className='flex items-center gap-2'>
				<HomeI />
				<Link to='/home' className='font-[500]'>Home</Link>
			</div>
		</div>
	);
}

export default HomeSideBar
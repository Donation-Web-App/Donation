import { HomeI, DonateI, Activity, HistoryI, Like  } from "../assets";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Logout } from "."

export function NavBar () {
	const [currentRoute, setCurrentRoute] = useState(window.location.pathname);
	const userRole = window.localStorage.getItem('userRole')
	const navigate = useNavigate();

	const adminRoutes = [
		{ icon: <HomeI/>, to: '/admin/home', label: 'Home' },
		{ icon: <Activity/>, to: '/admin/breakdown', label: 'Breakdown' },
		{ icon: <Like/>, to: '/admin/donations', label: 'Donations' },
		{ icon: <Like/>, to: '/admin/mydonations', label: 'My Donations' },
	]

	const donorRoutes = [
		{ icon: <HomeI/>, to: '/donor/home', label: 'Home' },
		{ icon: <Like/>, to: '/donor/donations', label: 'Donations' },
	]

	// Choose the appropriate routes to display based on a user's role
	const routes = userRole == "admin" ? adminRoutes : donorRoutes; 

	return (
		<div className='flex flex-col justify-between border-r h-full py-2.5 px-5'>
			<div>
				<div className="mb-10">
					<h1 className="text-center text-xl font-bold text-primary">CACSA-UI</h1>
				</div>
				{routes.map((route => {
					// Dark gray if the link's route is the current route 
					const textColor = route.to === currentRoute ? 'text-gray-900': 'text-gray-400';

					function handleClick() {
						setCurrentRoute(route.to);
						navigate(route.to);
					}

					return (
						<div 
							className='flex items-center my-10 cursor-pointer' 
							key={route.to}
							onClick={handleClick}
						>
							<div className='mr-2.5'>
								{route.icon}
							</div>
							<span 
								className={`text-sm ${textColor}`} 
							>
								{route.label}
							</span>
						</div>
					)
				}))}
			</div>	
			<Logout />
		</div>
	);
};

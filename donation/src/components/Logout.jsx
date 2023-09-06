import { useNavigate } from "react-router-dom";
import { LogoutI } from "../assets";

export function Logout () {
	const navigate = useNavigate();

	function handleClick () {
		const itemsToClear = ['firstName', 'userRole', 'tokenValue', 'tokenExpiration'];
		
		for (const item of itemsToClear) {
			window.localStorage.setItem(item, '');
		}

		navigate('/login');
	}

	return (
		<div 
			onClick={handleClick}
			className='flex items-center gap-2 absolute bottom-20'
		>
			<LogoutI />
			<span className='font-[500] cursor-pointer'>
				Logout
			</span>
		</div>
	);
};

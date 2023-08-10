/** @format */

import React from "react";
// import ProtectedRoute from "./context/protectedRoute";
import "./index.css";
import {
	Login,
	SignUp,
	Home,
	Donations,
	History,
	BreakDown,
	MyDonations,
} from "./pages";
import { NavBar } from "./components";
// import Input from "./components/input";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<SignUp />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/login' element={<Login />} />
				<Route path='/navbar' element={<NavBar />} />
				<Route path='/home' element={<Home />} />
				 <Route path='/donations' element={<Donations />} />
				<Route path='/history' element={<History />} />
				<Route path='/breakdown' element={<BreakDown />} />
				<Route path='/mydonations' element={<MyDonations />} />
			</Routes>
		</div>
	);
}

export default App;

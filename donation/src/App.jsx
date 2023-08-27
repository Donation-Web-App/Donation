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
import Input from "./components/input";
import { Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<SignUp />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/login' element={<Login />} />
				<Route path='/navbar' element={<NavBar />} />
				{/* <ProtectedRoute path='/home' element={<Home />} /> */}
				{/* <ProtectedRoute path='/donations' element={<Donations />} />
				<ProtectedRoute path='/history' element={<History />} />
				<ProtectedRoute path='/breakdown' element={<BreakDown />} />
				<ProtectedRoute path='/mydonations' element={<MyDonations />} /> */}
			</Routes>
		</Router>
	);
}

export default App;

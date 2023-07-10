import { useState } from 'react'
import "./index.css";
import SignUp from "./pages/signUp";
import Login from "./pages/Login";
import Input from "./components/input";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		
			<div>
				<Routes>
					<Route path='/signup' element={<SignUp />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</div>
		
	);
}

export default App

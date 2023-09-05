import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast'
import { ApiBaseUrlContext } from "./context";
import { Layout } from "./components";
import {
	Index,
	Login,
	SignUp,
	AdminHome,
	DonorHome,
	Breakdown,
	MyDonations,
	DonorDonations,
	AdminDonations,
	ResetPassword,
	ForgotPassword,
} from "./pages";
import "./index.css";

function App() {
	return (
		<div>
			<ApiBaseUrlContext.Provider value="https://donation-api-v2.onrender.com">
				<Toaster position="top-center"/>
				<BrowserRouter>
					<Routes>
						{/* Common routes*/}
						<Route path='signup' element={<SignUp />} />
						<Route path='login' element={<Login />} />
						<Route path='forgot' element={<ForgotPassword />} />
						<Route path='reset' element={<ResetPassword/>} />

						{/* Admin routes*/}
						<Route path='admin' element={<Layout/>}>
							<Route path='home' element={<AdminHome />}/>
							<Route path='breakdown' element={<Breakdown />} />
							<Route path='mydonations' element={<MyDonations />} />
							<Route path='donations' element={<AdminDonations />} />
						</Route>

						{/* Donor routes */}
						<Route path="donor" element={<Layout/>}>
							<Route path="home" element={<DonorHome/>} />
							<Route path='donations' element={<DonorDonations />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</ApiBaseUrlContext.Provider>
		</div>
	);
}

export default App;

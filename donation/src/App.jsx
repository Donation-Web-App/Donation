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
<<<<<<< HEAD
import { NavBar } from "./components";
// import Input from "./components/input";
import { Route, Routes } from "react-router-dom";
=======
import "./index.css";
>>>>>>> 18a2f46243301dc8703dc5bf4ff3a3ee734dfa31

function App() {
	return (
		<div>
<<<<<<< HEAD
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
=======
			<ApiBaseUrlContext.Provider value="https://donation-api-v2.onrender.com">
				<Toaster position="top-center"/>
				<BrowserRouter>
					<Routes>
						{/* Common routes*/}
						<Route path='/' element={<Index/>} />
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
>>>>>>> 18a2f46243301dc8703dc5bf4ff3a3ee734dfa31
		</div>
	);
}

export default App;

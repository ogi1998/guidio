import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from './store/uiSlice';
import { Route, Routes } from "react-router"

import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import Landing from "./components/pages/Landing/Landing"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"





const App = () => {
	const dispatch = useDispatch();

	const shouldShowLayout = useSelector(state => state.ui.shouldShowLayout);

	useEffect(() => {
		dispatch(uiActions.showLayout());
	}, [dispatch])

	return (
		<div className="bg-hero min-h-full flex flex-col">
			{shouldShowLayout && <Navbar />}
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
			{shouldShowLayout && <Footer />}
		</div>
	)
}
export default App

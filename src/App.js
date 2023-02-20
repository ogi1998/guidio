import { Box, CssBaseline } from "@mui/material"

import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux";
import {uiActions} from './store/uiSlice';
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
		<Box minHeight='100vh' display='flex' flexDirection='column' bgcolor='light.main'>
			{shouldShowLayout && <Navbar />}
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
			{shouldShowLayout && <Footer />}
			<CssBaseline />
		</Box>
	)
}
export default App

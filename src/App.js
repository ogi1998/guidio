import { Box, CssBaseline } from "@mui/material"
import { Route, Routes } from "react-router"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import Landing from "./components/pages/Landing/Landing"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"

import bkg from './assets/background.png';

const App = () => {
	return (
		<Box sx={{backgroundImage: `url(${bkg})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat'}} minHeight='100vh' display='flex' flexDirection='column' bgcolor='light.main'>
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
			<Footer />
			<CssBaseline />
		</Box>
	)
}
export default App

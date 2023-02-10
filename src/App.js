import { Box, CssBaseline } from "@mui/material"
import { useState } from "react"
import { Route, Routes } from "react-router"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import Landing from "./components/pages/Landing/Landing"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"



const App = () => {
	const [showLayout, setShowLayout] = useState(true);
	return (
		<Box minHeight='100vh' display='flex' flexDirection='column' bgcolor='light.main'>
			{showLayout && <Navbar />}
			<Routes>
				<Route path="/" element={<Landing setShowLayout={setShowLayout}/>} />
				<Route path="/login" element={<Login setShowLayout={setShowLayout} />} />
				<Route path="/register" element={<Register setShowLayout={setShowLayout} />} />
			</Routes>
			{showLayout && <Footer />}
			<CssBaseline />
		</Box>
	)
}
export default App

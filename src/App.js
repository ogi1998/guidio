import { Box, CssBaseline } from "@mui/material"
import { Route, Routes } from "react-router"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import Landing from "./components/pages/Landing"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"

const App = () => {
	return (
		<Box minHeight='100vh' display='flex' flexDirection='column' bgcolor='light.main'>
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

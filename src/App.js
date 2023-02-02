import { Box, CssBaseline } from "@mui/material"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"

const App = () => {
	return (
		<Box minHeight='100vh' display='flex' flexDirection='column'>
			<Navbar />
			<Footer />
			<CssBaseline />
		</Box>
	)
}
export default App

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography component='h1' variant='h4' fontWeight='bold'>GUIDIO</Typography>
				<Box component='nav' display='flex' width='100%' ml={5} gap={3}>
					<Button variant='text' color='light' size="large" LinkComponent={NavLink} to="/">Home</Button>
					<Button variant='text' color='light' size="large">Popular</Button>
					<Button variant='text' color='light' size="large">Recent</Button>
					<Box ml='auto' display='flex' gap={2}>
						<Button variant="contained" color="secondary" LinkComponent={NavLink} to="/login">Register</Button>
						<Button variant="contained" color="success" LinkComponent={NavLink} to="/register">Login</Button>
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Logo from '../ui/Logo';

const Navbar = () => {
	return (
		<AppBar position="static" id='navbar'>
			<Toolbar sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, py: { xs: 2, md: 0 } }}>
				<Logo />
				<Box component="nav" display="flex" width="100%" ml={{ sx: 0, md: 5 }} gap={3} flexDirection={{ xs: 'column', md: 'row' }}>
					<Button
						variant="text"
						color="light"
						size="large"
						LinkComponent={NavLink}
						to="/"
					>
						Courses
					</Button>
					<Button variant="text" color="light" size="large">
						Instructors
					</Button>
					<Button variant="text" color="light" size="large">
						Tutorials
					</Button>
					<Box ml={{ sm: "none", md: "auto" }} display="flex" gap={{ xs: 4, md: 2 }} flexDirection={{ xs: 'column', md: 'row' }} alignItems={{ xs: "center", md: "none" }}>
						<Button
							variant="contained"
							color="secondary"
							LinkComponent={NavLink}
							to="/register"
						>
							Register
						</Button>
						<Button
							variant="contained"
							color="success"
							LinkComponent={NavLink}
							to="/login"
						>
							Login
						</Button>
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;

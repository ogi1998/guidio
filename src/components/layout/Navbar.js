import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography component="h1" variant="h4" fontWeight="300">
                    Guid
                    <Box display="inline" color="success.main">
                        .
                    </Box>
                    <Box display="inline" color='secondary.main'>io</Box>
                </Typography>
                <Box component="nav" display="flex" width="100%" ml={5} gap={3}>
                    <Button
                        variant="text"
                        color="light"
                        size="large"
                        LinkComponent={NavLink}
                        to="/"
                    >
                        Home
                    </Button>
                    <Button variant="text" color="light" size="large">
                        Popular
                    </Button>
                    <Button variant="text" color="light" size="large">
                        Recent
                    </Button>
                    <Box ml="auto" display="flex" gap={2}>
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

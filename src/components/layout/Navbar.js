import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static" id='navbar'>
            <Toolbar sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, py: {xs: 2, md: 0}}}>
                <Typography component="h1" variant="h4" fontWeight="300" pb={{xs: 2, md: 0}}>
                    Guid
                    <Box display="inline" color="success.main">
                        .
                    </Box>
                    <Box display="inline" color='secondary.main'>io</Box>
                </Typography>
                <Box component="nav" display="flex" width="100%" ml={{sx: 0, md: 5}} gap={3} flexDirection={{xs: 'column', md: 'row'}}>
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
                    <Box ml={{sm: "none", md: "auto"}} display="flex" gap={{xs: 4, md: 2}} flexDirection={{xs: 'column', md: 'row'}} alignItems={{xs: "center", md: "none"}}>
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

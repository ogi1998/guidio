import { Box, Button, Grid, TextField, Typography, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <Box
            width={{sx: 0.5, md:0.3}}
            alignSelf="center"
            bgcolor="white"
            mt="auto"
            p={3}
            borderRadius={2}
            sx={{
                boxShadow: (theme) => `0 3px 6px ${theme.palette.shadow.main}`,
            }}
        >
            <Typography variant="h4" color="dark.main" py={2}>
                Login
                <Box color="success.main" display="inline">
                    .
                </Box>
            </Typography>
            <Box component="form">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name="email"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            type="email"
                            color="success"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="password"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            type="password"
                            color="success"
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="success"
                    size="large"
                    sx={{ mt: '2rem' }}
                >
                    Login
                </Button>
                <Typography textAlign="right" my={2}>
                    Don't have an account?{' '}
                    <Link
						sx={{cursor:'pointer'}}
                        color="success.main"
                        variant="body1"
                        component={NavLink}
                        to="/register"
                    >
                        Register
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
};
export default Login;

import { Box, Button, Grid, TextField, Typography, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <Box
            width={{sx: 0.5, md:0.3}}
            alignSelf="center"
            bgcolor="white"
            mt="auto"
            p={3}
            borderRadius={2}
            sx={{ boxShadow: theme => `0 3px 6px ${theme.palette.shadow.main}`}}
        >
            <Typography variant="h4" color="dark.main" py={2}>
               Register<Box color='secondary.main' display='inline'>.</Box>
            </Typography>
            <Box component="form">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="firstName"
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                            color="secondary"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="lastName"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            color="secondary"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="email"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            type="email"
                            color="secondary"
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
                            color="secondary"
                        />
                    </Grid>
					<Grid item xs={12}>
                        <TextField
                            name="password-confirm"
                            required
                            fullWidth
                            id="password-confirm"
                            label="Confirm Password"
                            type="password"
                            color="secondary"
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{ mt: '2rem' }}
                >
                    Sign Up
                </Button>
				<Typography textAlign='right' my={2}>
                    Already have an account?{' '}
                    <Link
						sx={{cursor:'pointer'}}
                        color="secondary.main"
                        variant="body1"
                        component={NavLink}
                        to="/login"
                    >
                        Login
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
};
export default Register;

import { Box, Button, Input, Link, Typography } from "@mui/material";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import bkg from "../../assets/background2.png";
import Form from "../ui/Form";

const Login = ({setShowLayout}) => {
	useEffect(() => {
		setShowLayout(false);
	}, [setShowLayout]);
	return (
		<Box
			width="100vw"
			height="100vh"
			display="flex"
			alignItems="center"
			justifyContent="center"
			sx={{
				background: `url(${bkg})`,
				backgroundSize: "cover",
			}}
		>
			<Form>
				<Box component="form" width="100%" p={5}>
					<Typography variant="h4" fontWeight="bold" pb={5}>
						Login
					</Typography>
					<Box py={2}>
						<Typography
							color="gray.dark"
							display="block"
							variant="body1"
							component="label"
							fontWeight="bold"
						>
							Email
						</Typography>
						<Input
							placeholder="Email address..."
							color="gray"
							fullWidth
						/>
					</Box>
					<Box py={2}>
						<Typography
							color="gray.dark"
							display="block"
							variant="body1"
							component="label"
							fontWeight="bold"
						>
							Password
						</Typography>
						<Input
							placeholder="Password..."
							color="gray"
							type="password"
							fullWidth
						/>
					</Box>
					<Button
						type="submit"
						color="secondary"
						variant="contained"
						sx={{ borderRadius: "20px", my: 5 }}
					>
						Sign In
					</Button>
					<Typography
						color="gray.dark"
						fontWeight="bold"
						borderTop="1px solid gray"
						pt={1}
					>
						Need an account?
						<Link
							color="gray.dark"
							component={NavLink}
							to="/register"
						>
							REGISTER
						</Link>
					</Typography>
				</Box>
			</Form>
		</Box>
	);
};
export default Login;

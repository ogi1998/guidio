import { Box, Button, Input, Link, Typography } from "@mui/material";
import bkg from "../../assets/background2.png";

import { NavLink } from "react-router-dom";

import { useEffect } from "react";
import { uiActions } from "../../store/uiSlice";
import { useDispatch } from "react-redux";

import Form from "../ui/Form";

const Register = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(uiActions.hideLayout());
	}, [dispatch]);
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
						Register
					</Typography>
					<Box py={2}>
						<Typography
							color="gray.dark"
							display="block"
							variant="body1"
							component="label"
							fontWeight="bold"
						>
							Full Name
						</Typography>
						<Input
							placeholder="Full Name..."
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
							Email
						</Typography>
						<Input placeholder="Email..." color="gray" fullWidth />
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
							fullWidth
							type="password"
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
							Confirm Password
						</Typography>
						<Input
							placeholder="Confirm Password..."
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
						Sign Up
					</Button>
					<Typography
						color="gray.dark"
						fontWeight="bold"
						borderTop="1px solid gray"
						pt={1}
					>
						Already a user?
						<Link color="gray.dark" component={NavLink} to="/login">
							LOGIN
						</Link>
					</Typography>
				</Box>
			</Form>
		</Box>
	);
};
export default Register;

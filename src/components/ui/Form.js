import { Box, Grid, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from "../layout/Logo";

import bkg from '../../assets/background2.png';

const Form = (props) => {
	return (
		<Box
			width="50vw"
			display="flex"
			alignItems='flex-start'
			sx={{
				background: `url(${bkg})`,
				backgroundSize: "115%",
				boxShadow: (theme) =>
					`0px 1px 30px ${theme.palette.secondary.light}`,
			}}
		>
			<Grid container display="flex" justifyContent="center" mt={15}>
				<Link component={NavLink} to="/">
					<Logo color="primary.main" />
				</Link>
			</Grid>
			<Grid container>
				{props.children}
			</Grid>
		</Box>
	);
};
export default Form;

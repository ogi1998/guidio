import { Box, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

import bkg from '../../assets/background2.png';

const Form = (props) => {
	return (
		<Box
			width="50vw"
			display="flex"
			sx={{
				background: `url(${bkg})`,
				backgroundSize: "115%",
				boxShadow: (theme) =>
					`0px 1px 30px ${theme.palette.secondary.light}`,
			}}
		>
			<Grid container display="flex" justifyContent="center" mt={15}>
				<NavLink to="/">
					<Logo color="primary.main" />
				</NavLink>
			</Grid>
			<Grid container>
				{props.children}
			</Grid>
		</Box>
	);
};
export default Form;

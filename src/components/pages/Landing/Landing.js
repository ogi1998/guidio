import { Box } from "@mui/material";
import Courses from "./Courses";
import Header from "./Header";

import bkg from '../../../assets/background.png';
import { useEffect } from "react";

const Landing = ({setShowLayout}) => {
	useEffect(() => {
		setShowLayout(true);
	}, [setShowLayout])
	return (
		<Box
			sx={{
				backgroundImage: `url(${bkg})`,
				backgroundSize: "100%",
				backgroundRepeat: "no-repeat",
				px: 10
			}}
		>
			<Header />
			<Courses />
		</Box>
	);
};
export default Landing;

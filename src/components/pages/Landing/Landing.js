import { Box } from "@mui/material";
import Courses from "./Courses";
import Header from "./Header";

import {uiActions} from '../../../store/uiSlice';

import bkg from '../../../assets/background.png';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Landing = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(uiActions.showLayout());
	}, [dispatch])
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

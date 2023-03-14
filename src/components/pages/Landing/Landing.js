import Courses from "./Courses";
import Header from "./Header";

import {uiActions} from '../../../store/uiSlice';
import { useDispatch } from "react-redux";

import { useEffect } from "react";

const Landing = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(uiActions.showLayout());
	}, [dispatch])
	return (
		<div className="px-20 bg-hero" style={{backgroundSize: '101%'}}>
		<Header />
		<Courses />
		</div>
	);
};
export default Landing;

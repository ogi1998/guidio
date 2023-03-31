import Courses from "./Courses";
import Header from "./Header";

import { uiActions } from '../../../store/slices/uiSlice';
import { useDispatch } from "react-redux";

import { useEffect } from "react";

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(uiActions.setShowLayout(true));
	}, [dispatch])
	return (
		<div>
			<Header />
			<Courses />
		</div>
	);
};
export default Home;

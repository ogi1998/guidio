import Courses from "./Courses";
import Header from "./Header";

import { uiActions } from '../../../store/slices/uiSlice';
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

const Home = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user.activeUser);

	useEffect(() => {
		dispatch(uiActions.setShowLayout(true));
	}, [dispatch])
	return (
		<div>
			<Header />
			<Courses user={user}  isSingleuser={false} />
		</div>
	);
};
export default Home;

import Courses from "./Courses";
import Header from "./Header";
import Alert from '../../common/Alert';

import { uiActions } from '../../../store/slices/uiSlice';
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

const Home = () => {
	const dispatch = useDispatch();

	const activeUser = useSelector(state => state.user.activeUser);
	const successMsg = useSelector(state => state.ui.successMsg);

	useEffect(() => {
		dispatch(uiActions.setShowLayout(true));
	}, [dispatch])
	return (
		<div>
			<div className='flex justify-center absolute top-44 w-full'>
				<Alert type="success" size='fit' msg={successMsg} />
			</div>
			{!activeUser && <Header />}
			<Courses user={activeUser} isSingleuser={false} />
		</div>
	);
};
export default Home;

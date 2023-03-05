import { useDispatch, useSelector } from 'react-redux';
import {FaPlus} from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { logoutUser } from '../../store/userSlice';


const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userId = useSelector(({user}) => user.userId);

	function logoutHandler() {
		dispatch(logoutUser());
		navigate('/');
	};
	return (
		<div className='flex bg-primary-main py-4 px-20 mb-2 relative'>
			<nav className='flex text-light-main w-full gap-10 text-xl items-center'>
				<NavLink to='/'>Courses</NavLink>
				<NavLink to='/'>Instructors</NavLink>
				<NavLink to='/'>Tutorials</NavLink>
			</nav>
			<Logo />
			{!userId ? (
				<div className='flex w-full justify-end gap-5 items-center text-light-main'>
					<ButtonLink to='/register' color="bg-secondary-main" hover="hover:bg-secondary-dark">REGISTER</ButtonLink>
					<ButtonLink to='/login' color='bg-success-main' hover="hover:bg-success-dark">LOGIN</ButtonLink>
				</div>
			): (
				<div className='flex w-full justify-end gap-5 items-center text-light-main'>
					<ButtonLink to='/register' color="bg-secondary-main" hover="hover:bg-secondary-dark"><FaPlus className='inline' /> CREATE</ButtonLink>
					<button onClick={logoutHandler} color='bg-success-main' hover="hover:bg-success-dark">LOGOUT</button>
				</div>
			)}
		</div>
	);
};

function ButtonLink({ color, to, children, hover }) {
	return (
		<NavLink to={to} className={`${color} py-[0.6rem] px-5 rounded-md text-lg font-medium ${hover}`}>
			{children}
		</NavLink>
	)
}

export default Navbar;

import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { logoutUser } from "../../store/userSlice";

const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userId = useSelector(({ user }) => user.user?.userId);

	function logoutHandler() {
		dispatch(logoutUser());
		navigate("/");
	}
	return (
		<div className="flex bg-primary-main py-4 px-20 mb-2 relative">
			<nav className="flex text-light-main w-full gap-10 text-xl items-center">
				<NavLink to="/">Courses</NavLink>
				<NavLink to="/">Instructors</NavLink>
				<NavLink to="/">Tutorials</NavLink>
			</nav>
			<Logo />
			{!userId ? (
				<div className="flex w-full justify-end gap-5 items-center text-light-main">
					<NavLink
						to="/register"
						className="bg-secondary-main py-[0.6rem] px-5 rounded-md text-lg font-medium hover:bg-secondary-dark"
					>
						REGISTER
					</NavLink>
					<NavLink
						to="/login"
						className="bg-success-main py-[0.6rem] px-5 rounded-md text-lg font-medium hover:bg-success-dark"
					>
						LOGIN
					</NavLink>
				</div>
			) : (
				<div className="flex w-full justify-end gap-5 items-center text-light-main relative border">
					<button className="bg-secondary-main py-3 px-6 rounded-bl-[50%] rounded-tl-[40%] rounded-br-[40%] rounded-tr-[50%] text-lg font-medium hover:bg-secondary-dark">
						<FaPlus className="inline" /> CREATE
					</button>
					<button
						onClick={logoutHandler}
						className="bg-success-main py-3 px-5 rounded-md text-lg font-medium hover:bg-success-dark"
					>
						LOGOUT
					</button>
				</div>
			)}
		</div>
	);
};
export default Navbar;

import { useDispatch, useSelector } from "react-redux";
import { FaCaretDown, FaCaretRight, FaPlus, FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { logoutUser } from "../../store/userSlice";

const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector(({ user }) => user);

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
			{!user?.userId ? (
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
				<div className="flex w-full justify-end gap-5 items-center text-light-main relative">
					<button className="group relative border-x-2 py-3 px-5 rounded-xl text-xl font-semibold">
						<FaUser className="inline text-primary-main bg-light-main p-1 rounded-[50%] text-3xl mr-2" />
						Hello, {user.firstName}!{" "}
						<FaCaretDown className="inline text-3xl" />
						<div className="hidden group-hover:block absolute left-0 border-l-2 mt-3 pl-2 bg-primary-main rounded-md w-full">
							<NavLink
								className="flex items-center py-2"
								to="/profile"
							>
								<FaCaretRight className="mr-2" />
								My profile
							</NavLink>
							<NavLink
								className="flex items-center py-2"
								to="/profile"
							>
								<FaCaretRight className="mr-2" />
								Edit profile
							</NavLink>
						</div>
					</button>
					<button className="bg-secondary-main py-3 px-6 rounded-bl-[50%] rounded-tl-[40%] rounded-br-[40%] rounded-tr-[50%] -skew-y-6 text-lg font-medium hover:bg-secondary-dark flex items-center">
						<div className="skew-y-6 inline-block">
							<FaPlus className="inline" /> CREATE
						</div>
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

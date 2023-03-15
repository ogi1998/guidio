import { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaExclamationCircle } from 'react-icons/fa';

import { uiActions } from "../../store/slices/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import Form from "../ui/Form";
import { loginUser } from "../../store/controllers/authController";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const loginRef = useRef({});

	const error = useSelector(state => state.ui.errorMsg);

	useEffect(() => {
		dispatch(uiActions.hideLayout());
	}, [dispatch]);

	function loginHandler(event) {
		event.preventDefault();
		const { email, password } = loginRef.current;

		if (!email.value || !password.value) {
			dispatch(uiActions.createError("Error! Fields can't be empty."));
			setTimeout(() => { dispatch(uiActions.clearErrors()); }, 3000);

			return false;
		}

		dispatch(loginUser({
			email: email.value,
			password: password.value
		}, () => navigate('/')));

	}

	return (
		<Form onSubmit={loginHandler}>
			<h1 className="text-5xl font-bold py-10 pb-5">Login</h1>
			<div className={`text-danger-dark border border-dan bg-danger-light font-bold capitalize p-2 rounded text-lg w-[90%] ${!error && "invisible"}`}><FaExclamationCircle className="inline text-xl" /> {error}</div>
			<div className=" w-[90%]  py-5">
				<label className="block pb-1">Email</label>
				<input
					className="border-b-2 border-b-gray-dark focus:border-b-secondary-main py-1 w-full"
					type="text"
					placeholder="Email..."
					ref={el => loginRef.current.email = el}
				/>
			</div>
			<div className="w-[90%] py-5">
				<label className="block pb-1">Password</label>
				<input
					className="border-b-2 border-b-gray-dark focus:border-b-secondary-main py-1 w-full"
					type="password"
					placeholder="Password..."
					ref={el => loginRef.current.password = el}
				/>
			</div>
			<div className=" inline-block mt-10 text-center">
				<input
					type="submit"
					className="
					bg-secondary-main text-light-main text-lg w-3/4
					my-5 px-10 py-1.5 rounded-2xl shadow-normal shadow-secondary-main
					transition-all ease duration-300
					hover:shadow-normal-hover hover:shadow-secondary-main hover:cursor-pointer"
					value="Sign In"
				/>
				<p className=" border-t-2 mt-3 pt-2">
					Need an account?{" "}
					<NavLink
						to="/register"
						className="text-secondary-main border-b-2 border-secondary-main"
					>
						REGISTER
					</NavLink>
				</p>
			</div>
		</Form>
	);
};
export default Login;

import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { uiActions } from "../../store/uiSlice";
import { useDispatch } from "react-redux";
import Form from "../ui/Form";

const Login = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(uiActions.hideLayout());
	}, [dispatch])
	return (
		<Form>
			<h1 className="text-4xl font-bold py-2">Login</h1>
			<div className="w-full py-5">
				<label className="block pb-1">Username</label>
				<input className="border-b-2 border-b-gray-dark focus:border-b-secondary-main py-1 w-full" type="text" placeholder="Username..." />
			</div>
			<div className="w-full py-5">
				<label className="block pb-1">Password</label>
				<input className="border-b-2 border-b-gray-dark focus:border-b-secondary-main py-1 w-full" type="password" placeholder="Password..." />
			</div>
			<input type="submit" className="
				bg-secondary-main text-light-main text-lg
				my-5 px-10 py-1.5 rounded-2xl shadow-normal shadow-secondary-main
				transition-all ease duration-300
				hover:shadow-normal-hover hover:shadow-secondary-main hover:cursor-pointer"
				value="Sign In" />
			<p>Don't have an account? <NavLink to="/register" className="text-secondary-main text-xl hover:border-b-2 border-secondary-main">Register</NavLink></p>
		</Form>
	);
};
export default Login;



import { NavLink } from "react-router-dom";

import { useEffect } from "react";
import { uiActions } from "../../store/uiSlice";
import { useDispatch } from "react-redux";

import Form from "../ui/Form";

const Register = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(uiActions.hideLayout());
	}, [dispatch]);
	return (
		<Form>
		<h1 className="text-4xl font-bold py-2">Register</h1>
		<div className="flex gap-10 py-1">
			<div className="w-1/2">
				<label className="block pb-1">Full Name</label>
				<input className="border-b-2 border-b-gray-dark focus:border-b-secondary-main py-1 w-full" type="text" placeholder="Name..." />
			</div>
			<div className="w-1/2">
				<label className="block pb-1">Username</label>
				<input className="border-b-2 border-b-gray-dark focus:border-b-secondary-main py-1 w-full" type="text" placeholder="Username..." />
			</div>
		</div>
		<div className="w-full pt-4">
			<label className="block pb-1">Email</label>
			<input className="border-b-2 border-b-gray-dark focus:border-b-secondary-main py-1 w-full" type="email" placeholder="Email..." />
		</div>
		<div className="w-full pt-4">
			<label className="block pb-1">Password</label>
			<input className="border-b-2 border-b-gray-dark focus:border-b-secondary-main py-1 w-full" type="password" placeholder="Password..." />
		</div>
		<div className="w-full pt-4">
			<label className="block pb-1">Confirm Password</label>
			<input className="border-b-2 border-b-gray-dark focus:border-b-secondary-main py-1 w-full" type="password" placeholder="Confirm Password..." />
		</div>
		<input type="submit" className="
			bg-secondary-main text-light-main text-lg
			my-5 px-10 py-1.5 rounded-2xl shadow-normal shadow-secondary-main
			transition-all ease duration-300
			hover:shadow-normal-hover hover:shadow-secondary-main hover:cursor-pointer"
			value="Sign Up" />
		<p>Already a user? <NavLink to="/login" className="text-secondary-main text-xl hover:border-b-2 border-secondary-main">Login</NavLink></p>
	</Form>
	);
};
export default Register;

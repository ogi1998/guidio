import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { showAndHideMsg } from "../../store/slices/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import Form from "../ui/Form";
import { loginUser } from "../../store/controllers/authController";
import Alert from "../ui/Alert";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const loginRef = useRef({});

	const { errorMsg, successMsg } = useSelector((state) => state.ui);

	function loginHandler(event) {
		event.preventDefault();
		const { email, password } = loginRef.current;

		if (!email.value || !password.value) {
			dispatch(showAndHideMsg("error", "Error! Fields can't be empty."));
			return false;
		}

		dispatch(
			loginUser(
				{
					email: email.value,
					password: password.value,
				},
				() => {
					navigate("/");
					dispatch(
						showAndHideMsg(
							"success",
							"Success! Successfully logged in!"
						)
					);
				}
			)
		);
	}

	return (
		<Form onSubmit={loginHandler}>
			<h1 className="text-5xl font-bold py-10 pb-5">Login</h1>
			<Alert type="error" msg={errorMsg} />
			<Alert type="success" msg={successMsg} />
			<div className=" w-[90%]  py-5">
				<label className="block pb-1">Email</label>
				<input
					className="border-b-2 border-b-gray-dark focus:border-b-secondary-main py-1 w-full"
					type="text"
					placeholder="Email..."
					ref={(el) => (loginRef.current.email = el)}
				/>
			</div>
			<div className="w-[90%] py-5">
				<label className="block pb-1">Password</label>
				<input
					className="border-b-2 border-b-gray-dark focus:border-b-secondary-main py-1 w-full"
					type="password"
					placeholder="Password..."
					ref={(el) => (loginRef.current.password = el)}
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

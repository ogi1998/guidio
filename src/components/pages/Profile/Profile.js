import { useRef, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, updateUser } from "../../../store/controllers/userController";
import { uiActions } from "../../../store/slices/uiSlice";
import Avatar from "./Avatar";
import ButtonGroup from "./ButtonGroup";
import ChangePassword from "./ChangePassword";
import InputGroup from "./common/InputGroup";
import Profession from "./Profession";
import ProfileHeader from "./ProfileHeader";

const Profile = () => {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.user.activeUser);
	const error = useSelector((state) => state.ui.errorMsg);

	const formRef = useRef({});

	const [showPw, setShowPw] = useState(false);
	const [profId, setprofId] = useState(null);

	function updateHandler() {
		const {firstName, lastName, email, currentPassword, password, bio} = formRef.current;
		if (!profId) {
			dispatch(uiActions.createError("Selected profession doesn't exist!"));
			setTimeout(() => {
				dispatch(uiActions.clearErrors());
			}, 3000);
			return;
		}
		if (firstName.value === "" || lastName.value === "") {
			dispatch(uiActions.createError("Fields can't be empty!"));
			setTimeout(() => {
				dispatch(uiActions.clearErrors());
			}, 3000);
			return;
		}
		if (showPw && (currentPassword.value === "" || password.value === "")) {
				dispatch(uiActions.createError("Fields can't be empty!"));
				setTimeout(() => {
					dispatch(uiActions.clearErrors());
				}, 3000);
				return;
		}
		dispatch(
			updateUser(
				user.userId,
				{ first_name: firstName.value, last_name: lastName.value, email: email.value, bio: bio.value, profession_id: profId },
				() => {
					if (showPw)
						dispatch(changePassword(user.userId, {current_password: currentPassword.value, password: password.value}));
				}
			)
		);
	}
	return (
		<main>
			<ProfileHeader />
			<div className="flex justify-center mx-[20%] gap-32 my-36">
				<div className="flex-auto w-[20%]">
					<Avatar />
					<Profession profRef={val => formRef.current.profession = val} setProfId={setprofId} defaultValue={user.userDetails.profession?.name} />
					<InputGroup text="Bio" color="secondary" type="textarea" defaultValue={user.userDetails.bio} fieldRef={val => formRef.current.bio = val} />
				</div>
				<div className="flex-auto relative">
					<div
						className={`text-danger-dark border border-dan bg-danger-light font-bold capitalize p-2 mb-5 rounded text-lg w-[100%] ${
							!error && "invisible"
						}`}
					>
						<FaExclamationCircle className="inline text-xl" />{" "}
						{error}
					</div>

					<div className="flex gap-20 h-40 mb-10">
						<InputGroup
							text="First Name"
							color="success"
							type="text"
							defaultValue={user.firstName}
							fieldRef={val => formRef.current.firstName = val}
						/>
						<InputGroup
							text="Last Name"
							color="success"
							type="text"
							defaultValue={user.lastName}
							fieldRef={val => formRef.current.lastName = val}
						/>
					</div>
					<InputGroup
						text="Email"
						color="success"
						type="email"
						defaultValue={user.email}
						fieldRef={val => formRef.current.email = val}
					/>
					{showPw && <ChangePassword currentPwRef={val => formRef.current.currentPassword = val} pwRef={val => formRef.current.password = val} />}
					<ButtonGroup
						onChangePw={() => setShowPw((prev) => !prev)}
						showPwBtn={showPw}
						onUpdate={updateHandler}
					/>
				</div>
			</div>
		</main>
	);
};
export default Profile;

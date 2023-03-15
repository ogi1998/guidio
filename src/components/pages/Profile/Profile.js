import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, updateUser } from "../../../store/controllers/userController";
import { uiActions } from "../../../store/slices/uiSlice";
import Avatar from "./Avatar";
import ButtonGroup from "./ButtonGroup";
import ChangePassword from "./ChangePassword";
import InputGroup from "./common/InputGroup";
import ProfileHeader from "./ProfileHeader";

const Profile = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.activeUser);
	const error = useSelector((state) => state.ui.errorMsg);

	const [firstName, setFirstName] = useState(user.firstName);
	const [lastName, setLastName] = useState(user.lastName);
	const [pw, setPw] = useState("");
	const [newPw, setNewPw] = useState("");
	const [showPw, setShowPw] = useState(false);

	function updateHandler() {
		if (firstName === "" || lastName === "") {
			dispatch(uiActions.createError("Fields can't be empty!"));
			setTimeout(() => {
				dispatch(uiActions.clearErrors());
			}, 3000);
			return;
		}

		if (showPw) {
			if (pw === "" || newPw === "") {
				dispatch(uiActions.createError("Fields can't be empty!"));
				setTimeout(() => {
					dispatch(uiActions.clearErrors());
				}, 3000);
				return;
			}
		}
		dispatch(
			updateUser(
				user.userId,
				{ first_name: firstName, last_name: lastName },
				() => {
					if (showPw)
						dispatch(changePassword(user.userId, {current_password: pw, password: newPw}));
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
					<InputGroup
						text="Profession"
						color="secondary"
						type="text"
					/>
					<InputGroup text="Bio" color="secondary" type="textarea" />
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
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<InputGroup
							text="Last Name"
							color="success"
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<InputGroup
						text="Email"
						color="success"
						type="email"
						readOnly
						value={user.email}
					/>
					{showPw && <ChangePassword pw={pw} onChangePw={e => setPw(e.target.value)} newPw={newPw} onChangeNewPw={e => setNewPw(e.target.value)} />}
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

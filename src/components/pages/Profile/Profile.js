import { useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "./Avatar";
import ButtonGroup from "./ButtonGroup";
import ChangePassword from "./ChangePassword";
import InputGroup from "./common/InputGroup";
import ProfileHeader from "./ProfileHeader";

const Profile = () => {
	const user = useSelector(state => state.user.activeUser);
	const [showPw, setShowPw] = useState(false);
	return (
		<main>
			<ProfileHeader />
			<div className="flex justify-center mx-[20%] gap-32 my-36">
				<div className="flex-auto w-[20%]">
					<Avatar />
					<InputGroup text="Profession" color="secondary" type="text" />
					<InputGroup text="Bio" color="secondary" type="textarea" />
				</div>
				<div className="flex-auto relative">
					<div className="flex gap-20 h-40 mb-10">
						<InputGroup text="First Name" color="success" type="text" defaultValue={user.firstName} />
						<InputGroup text="Last Name" color="success" type="text" defaultValue={user.lastName} />
					</div>
					<InputGroup text="Email" color="success" type="email" defaultValue={user.email} readOnly={true} />
					<ChangePassword show={showPw} />
					<ButtonGroup onChangePw={() => setShowPw(prev => !prev)} showPwBtn={showPw} />
				</div>
			</div>
		</main>
	);
};
export default Profile;

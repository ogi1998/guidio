import { useSelector } from "react-redux";
import Avatar from "./Avatar";
import ButtonGroup from "./ButtonGroup";
import InputGroup from "./common/InputGroup";
import ProfileHeader from "./ProfileHeader";

const Profile = () => {
	const user = useSelector(state => state.user.activeUser);
	return (
		<main>
			<ProfileHeader />
			<div className="flex justify-center mx-[20%] gap-32 my-36">
				<div className="flex-auto w-[20%]">
					<Avatar />
					<InputGroup text="Bio" color="secondary" type="textarea" />
				</div>
				<div className="flex-auto relative">
					<div className="flex gap-20">
						<InputGroup text="First Name" color="success" type="text" defaultValue={user.firstName} />
						<InputGroup text="Last Name" color="success" type="text" defaultValue={user.lastName} />
					</div>
					<InputGroup text="Email" color="success" type="email" defaultValue={user.email} readOnly={true} />
					<InputGroup text="Profession" color="success" type="text" />
					<ButtonGroup />
				</div>
			</div>
		</main>
	);
};
export default Profile;

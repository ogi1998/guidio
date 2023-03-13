import ChangePassword from "./ChangePassword";
import ProfileInputGroup from "./common/ProfileInputGroup";

const ProfileData = () => {
	return (
		<div className="w-[50%] relative">
			<div className="flex gap-20">
				<ProfileInputGroup text="First Name" color="success" type="text" />
				<ProfileInputGroup text="Last Name" color="success" type="text" />
			</div>
			<ProfileInputGroup text="Email" color="success" type="email" />
			<ChangePassword />
			<div className="flex justify-between items-end absolute bottom-2 w-full">
				<button
					className="block bg-success-main text-light-main p-2 rounded-md"
				>
					Change password
				</button>
				<button className="block bg-danger-dark text-light-main p-2 rounded-md">
					Delete account
				</button>
			</div>
		</div>
	);
};
export default ProfileData;

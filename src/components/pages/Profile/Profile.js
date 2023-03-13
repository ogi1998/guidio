import ProfileData from "./ProfileData";
import ProfileDescription from "./ProfileDescription";
import ProfileHeader from "./ProfileHeader";

const Profile = () => {
	return (
		<main>
			<ProfileHeader />
			<div className="flex justify-center mx-[15%] gap-40 my-36">
				<ProfileDescription />
				<ProfileData />
			</div>
		</main>
	);
};
export default Profile;

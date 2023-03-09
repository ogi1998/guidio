import ProfileData from "./ProfileData";
import ProfileDescription from "./ProfileDescription";
import ProfileHeader from "./ProfileHeader";

const Profile = () => {
	
	return (
		<main>
			<ProfileHeader />
			<div className="flex justify-center mx-[15%] gap-28 my-36">
				<ProfileDescription />
				<ProfileData />
			</div>
		</main>
	);
};
export default Profile;

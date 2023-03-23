import { useState } from "react";
import { useSelector } from "react-redux";

import ProfileHeader from "./ProfileHeader";
import Menu from "./Menu";
import Alert from "../../ui/Alert";
import ChangePassword from "./ChangePassword";
import ProfileInformation from "./ProfileInformation";

const Profile = () => {
	const error = useSelector((state) => state.ui.errorMsg);
	const [activeTab, setActiveTab] = useState(0);
	return (
		<main>
			<ProfileHeader />
			<div className="px-[20%]">
				<Menu setActiveTab={setActiveTab} activeTab={activeTab} />
				<div className="flex justify-center">
					<Alert type="error" msg={error} size="half" />
				</div>
				{!activeTab ? <ProfileInformation /> : <ChangePassword />}
			</div>

		</main>
	);
};
export default Profile;

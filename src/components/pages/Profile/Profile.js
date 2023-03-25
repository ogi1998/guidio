import { useState } from "react";
import { useSelector } from "react-redux";

import ProfileHeader from "./header/ProfileHeader";
import Menu from "./main/Menu";
import Alert from "../../ui/Alert";
import ChangePassword from "./main/ChangePassword";
import ProfileInformation from "./main/ProfileInformation";

const Profile = () => {
	const { errorMsg, successMsg } = useSelector((state) => state.ui);
	const [activeTab, setActiveTab] = useState(0);

	return (
		<main>
			<ProfileHeader />
			<div className="px-[20%]">
				<Menu setActiveTab={setActiveTab} activeTab={activeTab} />
				<div className="flex justify-center">
					<Alert
						type={
							(errorMsg && "error") || (successMsg && "success")
						}
						msg={successMsg || errorMsg}
						size="half"
					/>
				</div>
				{!activeTab ? <ProfileInformation /> : <ChangePassword />}
			</div>
		</main>
	);
};
export default Profile;

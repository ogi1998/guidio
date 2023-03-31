import { useState } from "react";
import { useSelector } from "react-redux";

import ProfileHeader from "./header/ProfileHeader";
import Menu from "./main/Menu";
import Alert from "../../common/Alert";
import ChangePassword from "./main/ChangePassword";
import ProfileInformation from "./main/ProfileInformation";
import Courses from "../home/Courses";

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
				{activeTab === 0 && <ProfileInformation />}
				{activeTab === 1 && <ChangePassword />}
				{activeTab === 2 && <Courses type="single" cols="3" />}
			</div>
		</main>
	);
};
export default Profile;

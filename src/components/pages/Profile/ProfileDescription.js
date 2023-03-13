import { FaUser } from "react-icons/fa"
import ProfileInputGroup from "./common/ProfileInputGroup";

const ProfileDescription = () => {
	return (
		<div>
			<div className="flex mb-28">
				<FaUser className="inline-block bg-success-main p-6 text-[6rem] rounded-[50%] shadow-normal shadow-secondary-main mr-5" />
				<div className="flex flex-col justify-between">
					<button className="block bg-primary-main text-light-main p-2 rounded-md">
						Upload new picture
					</button>
					<button className="block bg-gray-main text-light-main p-2 rounded-md">
						Delete picture
					</button>
				</div>
			</div>
			<ProfileInputGroup text="Profession" color="secondary" type="text" defaultValue="Web Developer" />
			<ProfileInputGroup text="Bio" color="secondary" type="textarea" defaultValue="Some bio text" />
		</div >
	)
}
export default ProfileDescription
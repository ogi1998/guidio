import { FaFacebook, FaLinkedin, FaTwitter, FaUser } from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"

const ProfileHeader = () => {
	const user = useSelector((state) => state.user.activeUser);
  return (
	<header className=" bg-profile h-[65vh] bg-cover bg-no-repeat relative mb-10 bg-fixed">
	<div
		className="
	absolute bottom-0 bg-light-main pb-10 left-24 rounded-t-3xl px-10 z-10 h-1/2"
	>
		<div className="absolute left-[5%] top-5 w-[90%] h-full border-2 -z-10 border-success-main rounded-t-3xl shadow-small shadow-success-main"></div>
		<h3 className="text-3xl mt-10 font-semibold">
			<FaUser className="inline-block bg-success-main p-6 text-[7rem] rounded-[50%] shadow-normal shadow-secondary-main mr-5" />
			{user.firstName} {user.lastName}|
			<span className="text-lg">programmer</span>
		</h3>
		<div className="flex py-5 px-5 items-center gap-14 absolute w-[112%] bg-light-main -left-10 rounded-t-3xl -z-20 bottom-0">
			<div className="absolute left-[1%] top-[3%] w-[98%] h-[97%] border-2 -z-30 border-primary-main rounded-t-3xl shadow-small shadow-primary-main"></div>
			<div className="flex flex-col text-3xl gap-5 z-10">
				<NavLink to="https://facebook.com" target="_blank">
					<FaFacebook />
				</NavLink>
				<NavLink to="https://linkedin.com" target="_blank">
					<FaLinkedin />
				</NavLink>
				<NavLink to="https://twitter.com" target="_blank">
					<FaTwitter />
				</NavLink>
			</div>
			<p className="whitespace-pre-wrap w-[75%] font-light text-xl">
				some random text some random text some random text
				some random text some random textsome random text
			</p>
		</div>
	</div>
</header>
  )
}
export default ProfileHeader
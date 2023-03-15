import { FaUser } from "react-icons/fa"

const Avatar = () => {
	return (
		<div className="flex mb-20 justify-between">
			<FaUser className="inline-block bg-success-main p-8 text-[8rem] rounded-[50%] shadow-normal shadow-secondary-main mr-5" />
			<div className="flex flex-col justify-between flex-1">
				<button className="block bg-primary-main text-light-main px-2 py-3 rounded-md text-xl">
					Upload new picture
				</button>
				<button className="block bg-gray-main text-light-main px-2 py-3 rounded-md text-xl w-3/4">
					Delete picture
				</button>
			</div>
		</div>
	)
}
export default Avatar
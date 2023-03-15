import { useRef } from "react"
import { FaUser } from "react-icons/fa"

const Avatar = () => {
	const fileRef = useRef();
	return (
		<div className="flex justify-between h-40 mb-10">
			<FaUser className="inline-block bg-success-main p-8 text-[8rem] rounded-[50%] shadow-normal shadow-secondary-main mr-5" />
			<div className="flex flex-col justify-between">
				<input type="file" hidden ref={fileRef} accept="image/png, image/gif, image/jpeg" />
				<button className="block bg-primary-main text-light-main px-2 py-3 rounded-md text-lg" onClick={() => fileRef.current.click()}>
					 Upload new picture
				</button>
				<button className="block bg-gray-main text-light-main px-2 py-3 rounded-md text-lg w-3/4">
					Delete picture
				</button>
			</div>
		</div>
	)
}
export default Avatar
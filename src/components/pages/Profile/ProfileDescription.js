import { useEffect, useRef, useState } from "react"
import { FaCheck, FaPencilAlt, FaUser } from "react-icons/fa"

const ProfileDescription = () => {

	const elsRef = useRef({});
	const [isReadOnly, setIsReadOnly] = useState({ profession: true, bio: true });

	useEffect(() => {
		if (!isReadOnly.profession)
			elsRef.current.profession.focus();
	}, [isReadOnly.profession]);

	useEffect(() => {
		if (!isReadOnly.bio)
			elsRef.current.bio.focus();
	}, [isReadOnly.bio]);
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
			<div className="mb-10">
				<label className="block font-semibold mb-2" onClick={() => {
					setIsReadOnly(pre => {
						return { ...pre, profession: !pre.profession }
					})
				}}>
					Profession{" "}
					{isReadOnly.profession ? <FaPencilAlt className="inline" /> : <FaCheck className="inline text-success-main" />}
				</label>
				<input
					type="text"
					className={`w-full ${!isReadOnly.profession && 'shadow-small shadow-secondary-main'} border-2 border-secondary-main py-1 px-2 text-dark-main`}
					readOnly={isReadOnly.profession}
					defaultValue="Web Developer"
					ref={(val => elsRef.current.profession = val)}
				/>
			</div>
			<div>
				<label className="block font-semibold mb-2" onClick={() => {
					setIsReadOnly(pre => { return { ...pre, bio: !pre.bio } })
				}}>
					Bio{" "}
					{isReadOnly.bio ? <FaPencilAlt className="inline" /> : <FaCheck className="inline text-success-main" />}
				</label>
				<textarea
					className={`w-full ${!isReadOnly.bio && 'shadow-small shadow-secondary-main'} border-2 border-secondary-main py-1 px-2 text-dark-main`}
					rows={5}
					readOnly={isReadOnly.bio}
					defaultValue="some init value"
					ref={(val => elsRef.current.bio = val)}
				/>
			</div>
		</div >
	)
}
export default ProfileDescription
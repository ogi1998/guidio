import { FaPencilAlt, FaUser } from "react-icons/fa"

const ProfileDescription = () => {
  return (
	<div>
	<div className="flex mb-28">
		<FaUser className="inline-block bg-success-main p-6 text-[6rem] rounded-[50%] shadow-normal shadow-secondary-main mr-5" />
		<div className="flex flex-col justify-between">
			<button className="block bg-primary-main text-light-main p-2 rounded-md">
				Upload new picture
			</button>
			<button className="block bg-danger-dark text-light-main p-2 rounded-md">
				Delete picture
			</button>
		</div>
	</div>
	<div className="mb-10">
		<label className="block font-semibold mb-2">
			Profession{" "}
			<button>
				<FaPencilAlt />
			</button>
		</label>
		<input
			type="text"
			className="w-full border-2 border-secondary-main py-1 px-2 text-dark-main"
			value="Web Developer"
		/>
	</div>
	<div>
		<label className="block font-semibold mb-2">
			Bio{" "}
			<button>
				<FaPencilAlt />
			</button>
		</label>
		<textarea
			className="w-full border-2 border-secondary-main py-1 px-2 text-dark-main"
			rows={5}
		>
			Lorem ipsum dolor sit amet
		</textarea>
	</div>
</div>
  )
}
export default ProfileDescription
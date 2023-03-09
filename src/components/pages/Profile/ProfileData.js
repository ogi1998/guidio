import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

const ProfileData = () => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div className="w-[50%] relative">
			<div className="flex gap-20 mb-10">
				<div className="w-full">
					<label className="block font-semibold mb-2">
						First Name{" "}
						<button>
							<FaPencilAlt />
						</button>
					</label>
					<input
						type="text"
						className="w-full border-2 border-success-main py-1 px-2 text-dark-main"
						value="Marco"
					/>
				</div>
				<div className="w-full">
					<label className="block font-semibold mb-2">
						Last Name{" "}
						<button>
							<FaPencilAlt />
						</button>
					</label>
					<input
						type="text"
						className="w-full border-2 border-success-main py-1 px-2 text-dark-main"
						value="Rossi"
					/>
				</div>
			</div>
			<div className="mb-10">
				<label className="block font-semibold mb-2">
					Email{" "}
					<button>
						<FaPencilAlt />
					</button>
				</label>
				<input
					type="email"
					className="w-full border-2 border-success-main py-1 px-2 text-dark-main"
					value="marcorossi@gmail.com"
				/>
			</div>
			<div className={showPassword ? "visible" : "invisible"}>
				<div className="w-full mb-10">
					<label className="block font-semibold mb-2">
						Current Password{" "}
						<button>
							<FaPencilAlt />
						</button>
					</label>
					<input
						type="password"
						className="w-full border-2 border-success-main py-1 px-2 text-dark-main"
					/>
				</div>
				<div className="w-full">
					<label className="block font-semibold mb-2">
						New Password{" "}
						<button>
							<FaPencilAlt />
						</button>
					</label>
					<input
						type="password"
						className="w-full border-2 border-success-main py-1 px-2 text-dark-main"
					/>
				</div>
			</div>
			<div className="flex justify-between items-end absolute bottom-2 w-full">
				<button
					className="block bg-success-main text-light-main p-2 rounded-md"
					onClick={() => setShowPassword((val) => !val)}
				>
					Change password
				</button>
				<button className="block bg-danger-dark text-light-main p-2 rounded-md">
					Delete account
				</button>
			</div>
		</div>
	);
};
export default ProfileData;

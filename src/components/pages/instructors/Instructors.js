import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

import { getInstructors } from "../../../store/controllers/userController";
import { FaGithub, FaGlobe, FaLinkedin, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MESSAGE_ERROR_NO_INSTRUCTORS } from "../../../store/constants";
import Loading from "../../common/Loading";

const Instructors = () => {
	const dispatch = useDispatch();

	const instructors = useSelector(state => state.user.instructors);
	const { isLoading } = useSelector(state => state.ui);

	useEffect(() => {
		dispatch(getInstructors());
	}, [dispatch]);
	return (
		<div className="p-28">
			<h2 className="text-3xl">Instructors</h2>
			{isLoading ? <Loading /> :
				<div className="grid grid-cols-4 w-full gap-5 mt-10">
					{instructors?.length ? instructors.map(instructor =>
						<div key={instructor.userId} className="flex flex-col items-center justify-between gap-5 py-5 shadow-normal shadow-secondary-main rounded">
							<NavLink to={`/instructors/${instructor.userId}`} className="group flex flex-col items-center gap-5 hover:cursor-pointer">
								{instructor?.userDetails?.avatar ?
									<img src={instructor?.userDetails.avatar} alt="Avatar" className="rounded-[50%] w-20" />
									:
									<FaUser className="inline-block bg-success-main p-5 text-[5rem] rounded-[50%] shadow-normal shadow-secondary-main" />
								}
								<h2 className="text-xl group-hover:underline">{instructor.firstName} {instructor.lastName}</h2>
							</NavLink>
							<p className=" text-gray-dark">{instructor?.userDetails?.profession.name || "Profession not set"}</p>
							<p className="w-2/3 text-center">{instructor?.userDetails?.bio}</p>
							<div className="flex text-3xl w-1/3 justify-between">
								<NavLink
									to={instructor.userDetails?.website || "/"}
									target="_blank"
								>
									<FaGlobe />
								</NavLink>
								<NavLink
									to={instructor.userDetails?.linkedin || "/"}
									target="_blank"
								>
									<FaLinkedin />
								</NavLink>
								<NavLink
									to={instructor.userDetails?.github || "/"}
									target="_blank"
								>
									<FaGithub />
								</NavLink>
							</div>
						</div>
					)
						:
						<h1>{MESSAGE_ERROR_NO_INSTRUCTORS}</h1>}
				</div>
			}
		</div>
	)
}
export default Instructors
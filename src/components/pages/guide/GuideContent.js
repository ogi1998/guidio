import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getGuideById } from "../../../store/controllers/guideController";
import MarkdownContent from "../../common/MarkdownContent"
import FeaturedGuides from "./FeaturedGuides";
import UpdateGuide from "./UpdateGuide";
import Alert from "../../common/Alert";
import { MESSAGE_TYPE_ERROR, MESSAGE_TYPE_SUCCESS } from "../../../store/constants";

const GuideContent = () => {
	const [isUpdating, setIsUpdating] = useState(false);

	const dispatch = useDispatch();

	const { id } = useParams();
	const activeUser = useSelector(state => state.user.activeUser);
	const activeGuide = useSelector(state => state.guide.activeGuide);
	const content = `${activeGuide.title}\n${activeGuide.content}`;
	const { successMsg, errorMsg, isLoading } = useSelector(state => state.ui);

	useEffect(() => {
		dispatch(getGuideById(id));
	}, [dispatch, id, isUpdating]);
	return (
		<div className="p-20 bg-secondary-light">
			<div className="flex justify-center">
				<Alert type={(errorMsg && MESSAGE_TYPE_ERROR) || (successMsg && MESSAGE_TYPE_SUCCESS)} msg={errorMsg || successMsg} size={"half"} />
			</div>
			{
				(activeUser?.user?.userId === activeGuide.userId && !isUpdating && !isLoading) &&
				(
					<div>
						<button className="inline-block py-2 px-4 my-5 rounded-md bg-secondary-main text-light-main text-lg font-medium" onClick={() => setIsUpdating(true)}>Edit Guide</button>
						<div className="flex justify-between items-center bg-light-main rounded my-5 p-5">
						<div>
							<span className="text-gray-dark text-xl italic">Author: </span>
							<NavLink className="ml-5" to={"/instructors/" + activeGuide.user?.userId}>
								<img src={"/" + activeGuide.user?.userDetails?.avatar} alt="Avatar" className="w-[50px] inline rounded-[50%] mr-2"/>
								<h3 className="inline text-xl">{activeGuide.user?.firstName} {activeGuide.user?.lastName}</h3>
							</NavLink>
						</div>
						<div className=" text-gray-dark text-xl italic font-bold">
							Creation date:{" "}
							{new Date(activeGuide.lastModified).getDate()}
							-
							{new Date(activeGuide.lastModified).getMonth() + 1}
							-
							{new Date(activeGuide.lastModified).getFullYear()}
						</div>
					</div>
				</div>
				)
			}
			{
				isUpdating ?
					<UpdateGuide
						id={id}
						guideContent={activeGuide.content}
						guideTitle={activeGuide.title}
						setIsUpdating={setIsUpdating}
						guideNote={activeGuide.note}
						published={activeGuide.published} />
					:
					<div className="flex gap-10">
						<MarkdownContent content={content} lastModified={activeGuide.lastModified} className="h-fit" />
						<FeaturedGuides userId={activeGuide?.user?.userId} guideId={id} />
					</div>
			}
		</div>
	)
}
export default GuideContent
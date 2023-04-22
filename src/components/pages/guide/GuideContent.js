import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
	const { successMsg, errorMsg } = useSelector(state => state.ui);

	useEffect(() => {
		dispatch(getGuideById(id));
	}, [dispatch, id, isUpdating]);
	return (
		<div className="p-20 bg-secondary-light">
			<div className="flex justify-center">
				<Alert type={(errorMsg && MESSAGE_TYPE_ERROR) || (successMsg && MESSAGE_TYPE_SUCCESS)} msg={errorMsg || successMsg} size={"half"} />
			</div>
			{
				(activeUser.userId === activeGuide.userId && !isUpdating) &&
				<button className="inline-block py-2 px-4 my-5 rounded-md bg-secondary-main text-light-main text-lg font-medium" onClick={() => setIsUpdating(true)}>Edit Guide</button>
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
						<MarkdownContent content={content} className="h-fit" />
						<FeaturedGuides userId={activeGuide?.userId} guideId={id} />
					</div>
			}
		</div>
	)
}
export default GuideContent
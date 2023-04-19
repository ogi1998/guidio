import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGuideById } from "../../../store/controllers/guideController";
import MarkdownContent from "../../common/MarkdownContent"
import FeaturedGuides from "./FeaturedGuides";

const GuideContent = () => {
	const [isUpdating, setIsUpdating] = useState(false);

	const dispatch = useDispatch();

	const {id} = useParams();
	const activeUser = useSelector(state => state.user.activeUser);
	const activeGuide = useSelector(state => state.guide.activeGuide);
	const content = `${activeGuide.title}\n${activeGuide.content}`;

	useEffect(() => {
		dispatch(getGuideById(id));
	}, [dispatch, id]);
  return (
	<div className="p-20 bg-secondary-light">
		{(activeUser.userId === activeGuide.userId && !isUpdating) && <button className="my-5 bg-primary-main text-light-main" onClick={() => setIsUpdating(true)}>Update Guide</button>}
		{isUpdating ? 'xd' :
		<div className="flex gap-10">
			<MarkdownContent content={content} className="h-fit" />
			<FeaturedGuides userId={activeGuide?.userId} guideId={id} />
		</div>
		}
	</div>
  )
}
export default GuideContent
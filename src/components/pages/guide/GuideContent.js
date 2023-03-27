import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGuideById } from "../../../store/controllers/guideController";
import { guideActions } from "../../../store/slices/guideSlice";
import MarkdownContent from "../../common/MarkdownContent"
import FeaturedGuides from "./FeaturedGuides";

const GuideContent = () => {
	const dispatch = useDispatch();

	const {id} = useParams();
	const activeGuide = useSelector(state => state.guide.activeGuide);
	const content = `${activeGuide.title}\n${activeGuide.content}`;

	useEffect(() => {
		dispatch(getGuideById(id));

	}, [dispatch, id]);
  return (
	<div className="bg-secondary-light p-20 flex gap-10">
		<MarkdownContent content={content} className="h-fit" />
		<FeaturedGuides userId={activeGuide?.userId} guideId={id} />
	</div>
  )
}
export default GuideContent
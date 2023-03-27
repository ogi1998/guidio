import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGuideById } from "../../../store/controllers/guideController";
import MarkdownContent from "../../common/MarkdownContent"

const GuideContent = () => {
	const dispatch = useDispatch();

	const {id} = useParams();
	const activeGuide = useSelector(state => state.guide.activeGuide);
	const content = `${activeGuide.title}\n${activeGuide.content}`;

	useEffect(() => {
		dispatch(getGuideById(id));
	}, [dispatch, id]);
  return (
	<div className="bg-secondary-light p-20 flex">
		<MarkdownContent content={content} className="w-[65%] h-fit" />
	</div>
  )
}
export default GuideContent
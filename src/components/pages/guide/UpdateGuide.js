import { useState } from "react";

import Editor from "../../common/editor/Editor";
import Preview from "../../common/editor/Preview";

import DOMPurify from "dompurify";
import { useDispatch } from "react-redux";
import { deleteGuide, updateGuide } from "../../../store/controllers/guideController";
import { showAndHideMsg } from "../../../store/slices/uiSlice";
import { useNavigate } from "react-router-dom";
import { MESSAGE_ERROR_FIELDS, MESSAGE_TYPE_ERROR } from "../../../store/constants";


const UpdateGuide = ({id, guideContent, guideTitle, setIsUpdating}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [content, setContent] = useState(guideContent);
	const [title, setTitle] = useState(guideTitle.substring(2));

	function updateGuideHandler() {
		if (title === '' || content === '') {
			dispatch(showAndHideMsg(MESSAGE_TYPE_ERROR, MESSAGE_ERROR_FIELDS));
			return;
		}
		dispatch(updateGuide(title, content, id, () => {
			setIsUpdating(false);
		}));
	}

	function deleteGuideHandler() {
		dispatch(deleteGuide(id, () => navigate("/")));
	}
	return (
		<div className="flex justify-between gap-10">
			<div className="w-1/2">
				<Editor
					title={title}
					setTitle={e => setTitle(e.target.value)}
					value={content}
					setContent={e => setContent(DOMPurify.sanitize(e.target.value))}
				/>
				<div className="flex justify-between">
				<button className="inline-block py-2 px-4 my-5 rounded-md bg-danger-dark text-light-main text-lg font-medium self-end" onClick={deleteGuideHandler}>
					Delete a guide
				</button>
				<button className="inline-block py-2 px-4 my-5 rounded-md bg-secondary-main text-light-main text-lg font-medium self-end" onClick={updateGuideHandler}>
					Update a guide
				</button>
				</div>
			</div>
			<Preview title={title} content={content} />
		</div >
	)
}
export default UpdateGuide
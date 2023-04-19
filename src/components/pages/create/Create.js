import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGuide } from "../../../store/controllers/guideController";
import { showAndHideMsg } from "../../../store/slices/uiSlice";

import Alert from '../../common/Alert';
import Editor from "../../common/editor/Editor";
import Preview from "../../common/editor/Preview";

import DOMPurify from "dompurify";
import { useNavigate } from "react-router-dom";

const Create = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const { errorMsg, successMsg } = useSelector(state => state.ui);
	const [content, setContent] = useState("");
	const [title, setTitle] = useState("");

	function createGuideHandler() {
		if (title === '' || content === '') {
			dispatch(showAndHideMsg('error', 'Fields cant be empty!'));
			return;
		}
		dispatch(createGuide(title, content, () => {
			navigate('/');
			dispatch(showAndHideMsg('success', 'Guide successfully created!'));
		}));
	}
	return (
		<div className="bg-secondary-light px-10">
			<h2 className="text-5xl pt-20">Create a guide</h2>
			<div className="flex justify-center">
				<Alert type={(errorMsg && 'error') || (successMsg && 'success')} msg={errorMsg || successMsg} size="half" />
			</div>
			<div className="flex justify-between gap-10">
				<div className="w-[50%] flex flex-col">
					<Editor
						title={title}
						setTitle={e => setTitle(e.target.value)}
						value={content}
						setContent={e => setContent(DOMPurify.sanitize(e.target.value))}
					/>
					<button className="inline-block py-2 px-4 my-5 rounded-md bg-secondary-main text-light-main text-lg font-medium self-end" onClick={createGuideHandler}>
						Publish a guide
					</button>
				</div>
				<Preview title={title} content={content} />
			</div>
		</div>
	);
};
export default Create;

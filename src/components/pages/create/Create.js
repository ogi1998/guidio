import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGuide } from "../../../store/controllers/guideController";
import { showAndHideMsg } from "../../../store/slices/uiSlice";

import Alert from '../../common/Alert';
import Cover from "./Cover";
import Editor from "./Editor";
import Preview from "./Preview";

const Create = () => {
	const dispatch = useDispatch();
	const {errorMsg, successMsg} = useSelector(state => state.ui);
	const [content, setContent] = useState("");
	const [title, setTitle] = useState("");

	function createGuideHandler() {
		if (title === '' || content === '') {
			dispatch(showAndHideMsg('error', 'Fields cant be empty!'));
			return;
		}
		dispatch(createGuide(title, content, () => dispatch(showAndHideMsg('success', 'Guide successfully created!'))));
	};
	return (
		<div className="bg-secondary-light">
			<Cover />
			<div className="flex justify-center">
				<Alert type={(errorMsg && 'error') || (successMsg && 'success')} msg={errorMsg || successMsg} size="half" />
			</div>
			<div className="flex justify-center">
				<Editor
					setTitle={e => setTitle(e.target.value)}
					value={content}
					setContent={e => setContent(e.target.value)}
					onCreate={createGuideHandler}
				/>
				<Preview title={title} content={content} onCreate={createGuideHandler} />
			</div>
		</div>
	);
};
export default Create;

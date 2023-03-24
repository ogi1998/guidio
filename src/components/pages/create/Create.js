import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGuide } from "../../../store/slices/guideSlice";

import Alert from '../../ui/Alert';
import Cover from "./Cover";
import Editor from "./Editor";
import Preview from "./Preview";

const Create = () => {
	const dispatch = useDispatch();
	const {errorMsg} = useSelector(state => state.ui);
	const [content, setContent] = useState("");
	const [title, setTitle] = useState("");

	function createGuideHandler() {
		dispatch(createGuide(title, content));
	};
	return (
		<div className="bg-secondary-light">
			<Cover />
			<Alert type='error' msg={errorMsg} />
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

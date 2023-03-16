import { useState } from "react";

import Cover from "./Cover";
import Editor from "./Editor";
import Preview from "./Preview";

const Create = () => {
	const [val, setVal] = useState("");
	return (
		<div className="bg-secondary-light">
			<Cover />
			<div className="flex justify-center">
				<Editor
					value={val}
					onChange={function (e) {
						// e.target.parentElement.style.height = e.target.scrollHeight + "px";
						setVal(e.target.value);
					}}
				/>
				<Preview content={val} />
			</div>
		</div>
	);
};
export default Create;

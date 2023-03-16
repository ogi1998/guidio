import { useState } from "react";

import Cover from "./Cover";
import Editor from "./Editor";
import Preview from "./Preview";

const Create = () => {
  const [val, setVal] = useState("");
  return (
    <div className="bg-secondary-light">
      <Cover />
      <Editor value={val} onChange={function(e) {
        e.target.style.height = e.target.scrollHeight + "px";
        setVal(e.target.value)
      }} />
      <Preview content={val} />
    </div>
  )
}
export default Create
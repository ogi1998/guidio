import { useRef } from "react"
import UploadButton from "../../common/UploadButton";

const Cover = () => {
	const fileRef = useRef();
  return (
	<header className="bg-profile h-[40vh] bg-cover bg-no-repeat relative mb-10 bg-fixed flex justify-center items-center">
		<UploadButton uploadRef={fileRef} text="Upload Cover Image" color="light" />
	</header>
  )
}
export default Cover
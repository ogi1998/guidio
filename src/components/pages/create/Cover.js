import { useRef } from "react"
import UploadButton from "../../ui/UploadButton";

const Cover = () => {
	const fileRef = useRef();
  return (
	<header className="bg-profile h-[50vh] bg-cover bg-no-repeat relative mb-10 bg-fixed flex justify-center items-center">
		<UploadButton uploadRef={fileRef} text="Upload Cover Image" color="light" />
	</header>
  )
}
export default Cover
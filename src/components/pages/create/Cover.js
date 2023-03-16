import { useRef } from "react"

const Cover = () => {
	const fileRef = useRef();
  return (
	<header className="bg-profile h-[50vh] bg-cover bg-no-repeat relative mb-10 bg-fixed flex justify-center items-center">
		<input type="file" hidden ref={fileRef} accept="image/png, image/gif, image/jpeg" />
		<button className="bg-light-main text-secondary-main p-4 font-semibold rounded-md shadow-normal hover:shadow-normal-hover text-xl" onClick={() => fileRef.current.click()}>
			Upload new Image
		</button>
	</header>
  )
}
export default Cover
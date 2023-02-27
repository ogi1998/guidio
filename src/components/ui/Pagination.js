import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const Pagination = () => {
	return (
		<div className="flex justify-center items-center gap-2 my-10">
			<div className="
				flex items-center justify-center
				border border-gray-main text-gray-dark
				p-1 text-lg h-8 w-8 bg-light-main
				hover:cursor-pointer hover:bg-secondary-main hover:text-light-main"
			>
				<FaAngleLeft />
			</div>
			<div className="
				flex items-center justify-center
				border border-gray-main text-gray-dark
				p-1 text-lg h-8 w-8 bg-light-main
				hover:cursor-pointer hover:bg-secondary-main hover:text-light-main"
			>
				1
			</div>
			<div className="
				flex items-center justify-center
				border border-gray-main text-gray-dark
				p-1 text-lg h-8 w-8 bg-light-main
				hover:cursor-pointer hover:bg-secondary-main hover:text-light-main"
			>
				2
			</div>
			<div className="
				flex items-center justify-center
				border border-gray-main text-gray-dark
				p-1 text-lg h-8 w-8 bg-light-main
				hover:cursor-pointer hover:bg-secondary-main hover:text-light-main"
			>
				<FaAngleRight />
			</div>
		</div>
	)
}
export default Pagination
import { NavLink } from "react-router-dom"

const Pagination = () => {
	return (
		<div className="flex justify-center items-center my-10 text-xl">
			<NavLink className="
				flex items-center justify-center
				border border-gray-main text-gray-dark
				p-5 h-8 w-8 bg-light-main
				hover:cursor-pointer hover:bg-secondary-main hover:text-light-main"
			to='/1'>
				{"<"}
			</NavLink>
			<NavLink className="
				flex items-center justify-center
				border border-gray-main text-gray-dark
				p-5 h-8 w-8 bg-light-main
				hover:cursor-pointer hover:bg-secondary-main hover:text-light-main"
			to='/1'>
				1
			</NavLink>
			<NavLink className="
				flex items-center justify-center
				border border-gray-main text-gray-dark
				p-5 h-8 w-8 bg-light-main
				hover:cursor-pointer hover:bg-secondary-main hover:text-light-main"
			to='/2'>
				2
			</NavLink>
			<NavLink className="
				flex items-center justify-center
				border border-gray-main text-gray-dark
				p-5 h-8 w-8 bg-light-main
				hover:cursor-pointer hover:bg-secondary-main hover:text-light-main"
			to='/2'>
				{">"}
			</NavLink>
		</div>
	)
}
export default Pagination
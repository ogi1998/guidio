const Pagination = () => {
	return (
		<div className="flex justify-center items-center my-10 text-xl">
			<div className="
				flex items-center justify-center
				border border-gray-main text-gray-dark
				p-5 h-8 w-8 bg-light-main
				hover:cursor-pointer hover:bg-secondary-main hover:text-light-main"
			>
				{"<"}
			</div>
			<div className="
				flex items-center justify-center
				border border-gray-main text-gray-dark
				p-5  h-8 w-8 bg-light-main
				hover:cursor-pointer hover:bg-secondary-main hover:text-light-main"
			>
				1
			</div>
			<div className="
				flex items-center justify-center
				border border-gray-main text-gray-dark
				p-5 h-8 w-8 bg-light-main
				hover:cursor-pointer hover:bg-secondary-main hover:text-light-main"
			>
				2
			</div>
			<div className="
				flex items-center justify-center
				border border-gray-main text-gray-dark
				p-5 h-8 w-8 bg-light-main
				hover:cursor-pointer hover:bg-secondary-main hover:text-light-main"
			>
				{">"}
			</div>
		</div>
	)
}
export default Pagination
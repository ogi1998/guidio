const ButtonGroup = () => {
	return (
		<div className="flex justify-between items-end absolute bottom-10 w-full">
			<button
				className="block bg-danger-dark text-light-main p-2 rounded-md text-lg">
				Delete Account
			</button>
			<button
				className="block bg-primary-main text-light-main p-2 rounded-md text-lg">
				Change password
			</button>
			<button className="block  text-light-main p-2 rounded-md bg-success-main text-lg">
				Save Changes
			</button>
		</div>
	)
}
export default ButtonGroup
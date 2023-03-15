const ButtonGroup = ({onChangePw, showPwBtn}) => {
	return (
		<div className="flex justify-between items-end absolute bottom-10 w-full">
			<button
				className="block bg-danger-dark text-light-main p-2 rounded-md text-xl">
				Delete Account
			</button>
			<button
				className={`${showPwBtn && "hidden"} block bg-primary-main text-light-main p-2 rounded-md text-xl`} onClick={onChangePw}>
				Change password
			</button>
			<button className="block  text-light-main p-2 rounded-md bg-success-main text-xl">
				Save Changes
			</button>
		</div>
	)
}
export default ButtonGroup
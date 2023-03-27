const Toggle = ({ isChecked, setChecked }) => {
	return (
		<label className="flex items-center relative w-max cursor-pointer select-none mb-5">
			<span className="font-bold mr-3">Instructor?</span>
			<input
			className="peer appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full bg-light-main ring-[3px] ring-secondary-main"
			type="checkbox"
			checked={isChecked} onChange={setChecked} />
			<span className="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-danger-dark peer-checked:bg-success-main peer-checked:translate-x-7" />
		</label>
	)
}
export default Toggle
const Toggle = () => {
  return (
	<label className="flex items-center relative w-max cursor-pointer select-none">
		<span className="text-lg font-bold mr-3">Instructor?</span>
		<input className="peer appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full bg-danger-dark checked:bg-success-main ring-[3px] ring-secondary-main" type="checkbox" />
		<span className="absolute font-medium text-xs uppercase right-1 text-light-main">OFF</span>
		<span className="absolute font-medium text-xs uppercase right-8 text-light-main">ON</span>
		<span className="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-light-main peer-checked:translate-x-7" />
	</label>
  )
}
export default Toggle
const InputGroup = ({ color, text, type, defaultValue = '', readOnly = false }) => {

	return (
		<div className="mb-10 w-full">
			<label className="block font-semibold mb-2">
				{text}{" "}
			</label>
			{type === "textarea" ?
				<textarea
					className={`w-full border-2 border-${color}-main py-1 px-2 text-dark-main`}
					rows={8}
					defaultValue={defaultValue}
					readOnly={readOnly}>
				</textarea>
				:
				<input
					type={type}
					className={`w-full border-2 border-${color}-main py-1 px-2 text-dark-main`}
					defaultValue={defaultValue}
					readOnly={readOnly}
				/>
			}
		</div>
	)
}
export default InputGroup
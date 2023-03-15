const InputGroup = ({ color, text, type, defaultValue = '', readOnly = false, value, onChange }) => {

	return (
		<div className="mb-10 w-full">
			<label className="block font-semibold mb-2">
				{text}{" "}
			</label>
			{type === "textarea" ?
				<textarea
					className={`w-full border-2 border-${color}-main py-2 px-2 text-dark-main text-xl`}
					rows={8}
					value={value}
					onChange={onChange}
					readOnly={readOnly}>
				</textarea>
				:
				<input
					type={type}
					className={`w-full border-2 border-${color}-main py-2 px-2 text-dark-main text-xl`}
					value={value}
					onChange={onChange}
					readOnly={readOnly}
				/>
			}
		</div>
	)
}
export default InputGroup
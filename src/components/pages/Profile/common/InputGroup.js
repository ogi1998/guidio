const InputGroup = ({ color, text, type, defaultValue = '', readOnly = false }) => {

	return (
		<div className="mb-10 w-full">
			<label className="block font-semibold mb-2">
				{text}{" "}
			</label>
			{type === "textarea" ?
				<textarea
					className={`w-full border-2 border-${color}-main py-2 px-2 text-dark-main text-xl`}
					rows={8}
					defaultValue={defaultValue}
					readOnly={readOnly}>
				</textarea>
				:
				<input
					type={type}
					className={`w-full border-2 border-${color}-main py-2 px-2 text-dark-main text-xl`}
					defaultValue={defaultValue}
					readOnly={readOnly}
				/>
			}
		</div>
	)
}
export default InputGroup
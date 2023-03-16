const Editor = ({ value, onChange }) => {
	return (
		<div className="flex flex-col gap-5 w-[40%] h-[70vh] shadow-normal shadow-secondary-main m-5 p-2 rounded bg-dark-main overflow-auto">
			<input
				type="text"
				className="rounded bg-light-main p-2 text-lg"
				placeholder="Title"
			/>
			<textarea
				placeholder="Start creating..."
				className="resize-none h-[100%] rounded bg-light-main p-2"
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};
export default Editor;

const Editor = ({ setContent, setTitle, createGuideHandler }) => {
	return (
		<div className="w-[40%] h-[80vh] m-5">
			<div className="flex flex-col gap-5 h-full p-2 rounded bg-secondary-main overflow-auto">
				<input
					type="text"
					className="rounded bg-light-main p-2 text-lg"
					placeholder="Title"
					onChange={setTitle}
				/>
				<textarea
					placeholder="Start creating..."
					className="resize-none h-[100%] rounded bg-light-main p-2"
					onChange={setContent}
				/>
			</div>
			<div className="text-right">
				<button className="inline-block py-2 px-4 mt-10 rounded-md bg-secondary-main text-light-main text-lg font-medium" onClick={createGuideHandler}>
					Save Changes
				</button>
			</div>
		</div>
	);
};
export default Editor;

import MarkdownContent from "../../common/MarkdownContent";

const Preview = ({ title, content, onCreate }) => {

	content = `# ${title}\n` + content;
	return (
		<div className="w-[40%] m-5">
			<div className="flex flex-col gap-5 w-full h-[70vh] p-2 rounded bg-primary-main overflow-auto">
				<MarkdownContent content={content} className="h-full" />
			</div>
			<button className="block py-2 px-4 mt-10 rounded-md bg-primary-main text-light-main text-lg font-medium" onClick={onCreate}>
				Publish
			</button>
		</div>
	);
};
export default Preview;

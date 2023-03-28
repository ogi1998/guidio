import MarkdownContent from "../../common/MarkdownContent";

const Preview = ({ title, content, onCreate }) => {

	content = `# ${title}\n` + content;
	return (
		<div className="w-[40%] m-5">
			<div className="flex flex-col gap-5 w-full h-[70vh] p-6 rounded bg-primary-main border-4 border-secondary-main overflow-auto">
				<MarkdownContent content={content} className="h-full border-4 border-secondary-main" />
			</div>
			<button className="block py-2 px-4 mt-10 rounded-md bg-primary-main text-light-main text-lg font-medium w-40" onClick={onCreate}>
				Publish
			</button>
		</div>
	);
};
export default Preview;

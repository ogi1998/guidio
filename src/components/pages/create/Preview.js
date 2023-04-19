import MarkdownContent from "../../common/MarkdownContent";

const Preview = ({ title, content, onCreate }) => {

	content = `# ${title}\n` + content;
	return (
		<div className="w-[50%]">
			<div className="flex flex-col gap-5 w-full h-[70vh] p-6 rounded bg-primary-main border-4 border-secondary-main overflow-auto">
				<MarkdownContent content={content} className="h-full border-4 border-secondary-main" />
			</div>
		</div>
	);
};
export default Preview;

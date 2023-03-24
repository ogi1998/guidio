import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as styles from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize'

const Preview = ({ title, content, onCreate }) => {

	content = `# ${title}\n` + content;
	return (
		<div className="w-[40%] m-5">
			<div className="flex flex-col gap-5 w-full h-[80vh] p-2 rounded bg-primary-main overflow-auto">
				<ReactMarkdown remarkPlugins={[[remarkGfm]]} rehypePlugins={[[rehypeRaw, rehypeSanitize]]}
					className="w-full h-full p-4 rounded bg-light-main markdown overflow-auto"
					components={{
						code({ inline, className, children, ...props }) {
							const match = /language-(\w+)/.exec(className || "");
							return !inline && match ? (
								<SyntaxHighlighter
									className="w-fit"
									children={String(children).replace(/\n$/, "")}
									style={styles.nord}
									language={match[1]}
									PreTag="div"
								>
									{children}
								</SyntaxHighlighter>
							) : (
								<code className={className} {...props}>
									{children}
								</code>
							);
						}
					}}
					children={content}
				/>
			</div>
			<button className="block py-2 px-4 mt-10 rounded-md bg-primary-main text-light-main text-lg font-medium" onClick={onCreate}>
				Publish
			</button>
		</div>
	);
};
export default Preview;

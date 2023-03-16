import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as styles from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize'

const Preview = ({ content }) => {
	return (
		<ReactMarkdown remarkPlugins={[[remarkGfm]]} rehypePlugins={[[rehypeRaw, rehypeSanitize]]}
			className="w-[40%] h-[70vh] shadow-normal shadow-secondary-main m-5 p-2 rounded bg-light-main markdown overflow-auto"
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
	);
};
export default Preview;

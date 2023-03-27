import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as styles from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize'

const MarkdownContent = ({content, className = ""}) => {
	try {
		return (
			<ReactMarkdown remarkPlugins={[[remarkGfm]]} rehypePlugins={[[rehypeRaw, rehypeSanitize]]}
			className={"w-full h-full p-4 rounded bg-light-main markdown overflow-auto " + className}
			components={{
				code({ inline, className, children, ...props }) {
					const match = /language-(\w+)/.exec(className || "");
					return !inline && match ? (
						<SyntaxHighlighter
							style={styles.nord}
							language={match[1]}
							PreTag="div"
						>
							{children}
						</SyntaxHighlighter>
					) : (
						<code className={className + " bg-gray-main p-1 rounded text-light-main"} {...props}>
							{children}
						</code>
					);
				}
			}}
			children={content}
		/>
		  )
	} catch(err) {
		console.log(err);
	}
}
export default MarkdownContent
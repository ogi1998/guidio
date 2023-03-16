import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as styles from "react-syntax-highlighter/dist/esm/styles/prism";

const Preview = ({content}) => {
  return (
	<ReactMarkdown components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
            className="w-fit"
            children={String(children).replace(/\n$/, '')}
            style={styles.atomDark}
            language={match[1]}
            PreTag="div"
            >
              {children}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }} children={content} />
  )
}
export default Preview
import { useRef } from 'react';
import { FaBold, FaCode, FaHeading, FaImage, FaItalic, FaLink, FaListOl, FaListUl, FaStrikethrough } from 'react-icons/fa';

const Editor = ({ setContent, setTitle, setNote, title, value, note }) => {
	const elsRef = useRef({});
	const contentRef = useRef();

	function handleEl(el) {
		contentRef.current.focus();
		contentRef.current.value += elsRef.current[el].value;
	}
	return (
		<div className="w-full h-[70vh]">
			<div className="flex flex-col gap-5 h-full p-6 rounded bg-secondary-dark2 border-4 border-secondary-main overflow-auto">
				<input
					type="text"
					className="rounded bg-light-main p-2 text-lg border-4 border-secondary-main"
					placeholder="Title"
					onChange={setTitle}
					value={title}
				/>
				<div className='flex justify-start gap-5 py-2 px-2 bg-secondary-main rounded'>
					<span ref={el => elsRef.current.heading = { el, value: "## " }} onClick={handleEl.bind(this, "heading")}>
						<FaHeading className='text-2xl hover:bg-light-main rounded p-1 hover:cursor-pointer' />
					</span>
					<span ref={el => elsRef.current.bold = { el, value: "****" }} onClick={handleEl.bind(this, "bold")}>
						<FaBold className='text-2xl hover:bg-light-main rounded p-1 hover:cursor-pointer' />
					</span>
					<span ref={el => elsRef.current.italic = { el, value: "__" }} onClick={handleEl.bind(this, "italic")}>
						<FaItalic className='text-2xl hover:bg-light-main rounded p-1 hover:cursor-pointer' />
					</span>
					<span ref={el => elsRef.current.strike = { el, value: "~~" }} onClick={handleEl.bind(this, "strike")}>
						<FaStrikethrough className='text-2xl hover:bg-light-main rounded p-1 hover:cursor-pointer' />
					</span>
					<span ref={el => elsRef.current.code = { el, value: "``" }} onClick={handleEl.bind(this, "code")}>
						<FaCode className='text-2xl hover:bg-light-main rounded p-1 hover:cursor-pointer' />
					</span>
					<span ref={el => elsRef.current.link = { el, value: "[](url)" }} onClick={handleEl.bind(this, "link")}>
						<FaLink className='text-2xl hover:bg-light-main rounded p-1 hover:cursor-pointer' />
					</span>
					<span ref={el => elsRef.current.image = { el, value: "![](url)" }} onClick={handleEl.bind(this, "image")}>
						<FaImage className='text-2xl hover:bg-light-main rounded p-1 hover:cursor-pointer' />
					</span>
					<span ref={el => elsRef.current.ul = { el, value: "- " }} onClick={handleEl.bind(this, "ul")}>
						<FaListUl className='text-2xl hover:bg-light-main rounded p-1 hover:cursor-pointer' />
					</span>
					<span ref={el => elsRef.current.ol = { el, value: "1. " }} onClick={handleEl.bind(this, "ol")}>
						<FaListOl className='text-2xl hover:bg-light-main rounded p-1 hover:cursor-pointer' />
					</span>
				</div>
				<textarea
					placeholder="Start creating..."
					className="resize-none h-[100%] rounded bg-light-main p-2 border-4 border-secondary-main"
					onChange={setContent}
					ref={contentRef}
					value={value}
				/>
				<h3 className='text-xl text-light-main'>Notes</h3>
				<textarea 
				placeholder='Enter a note...'
				value={note}
				onChange={setNote}
				className="resize-none h-[50%] rounded bg-light-main p-2 border-4 border-secondary-main" />
			</div>
		</div>
	);
};
export default Editor;

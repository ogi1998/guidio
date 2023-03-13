import { useEffect, useRef, useState } from "react"
import { FaCheck, FaPencilAlt } from "react-icons/fa";

const ProfileInputGroup = ({ text, color, type, defaultValue }) => {
	const inputRef = useRef();
	const [isReadOnly, setIsReadOnly] = useState(true);

	useEffect(() => {
		if (!isReadOnly)
			inputRef.current.focus();
	}, [isReadOnly]);

	return (
		<div className="mb-10 w-full">
			<label className="block font-semibold mb-2" onClick={() => {
				setIsReadOnly(pre => !pre);
			}}>
				{text}{" "}
				{isReadOnly ? <FaPencilAlt className="inline" /> : <FaCheck className='inline text-success-main' />}
			</label>
			{type === "textarea" ?
				<textarea
					className={`${!isReadOnly && 'shadow-small shadow-' + color + '-main'} w-full border-2 border-${color}-main py-1 px-2 text-dark-main`}
					rows={5}
					readOnly={isReadOnly}
					defaultValue={defaultValue}
					ref={inputRef}>
				</textarea>
				:
				<input
					type={type}
					className={`${!isReadOnly && 'shadow-small shadow-' + color + '-main'} w-full border-2 border-${color}-main py-1 px-2 text-dark-main`}
					readOnly={isReadOnly}
					defaultValue={defaultValue}
					ref={inputRef}
				/>
			}
		</div>
	)
}
export default ProfileInputGroup
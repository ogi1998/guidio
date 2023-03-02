import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Dropdown = ({title, items}) => {
	const [isActive, setIsActive] = useState(false);
	const ref = useRef({});

	useEffect(() => {
		function handleDropdown(e) {
			if (e.target.parentElement === ref.current.dropdown || e.target === ref.current.dropdown) {
				setIsActive(true);
			}
			else {
				setIsActive(false);
			}
		}
		document.addEventListener('click', handleDropdown);
	}, [])

	return (
			<div className="w-fit">
				<h4 className="
				flex items-center py-2 px-6 font-bold text-xl text-gray-dark
				shadow-normal shadow-secondary-main
				transition-all ease duration-300
				hover:shadow-normal-hover hover:shadow-secondary-main
				rounded-3xl
				hover:cursor-pointer"
				ref={el => ref.current.dropdown = el}
				>
					Popular <FaAngleDown className="inline ml-2 rounded-[50%] border-2 p-0.5 text-2xl"/>
				</h4>
				<ul className={`${!isActive && "invisible"}
					border-solid border-secondary-main border rounded-md bg-light-main my-3
					text-gray-dark text-lg`}
					ref={el => ref.current.dropdownList = el}>
						{items.map((item, idx) => (
							<li className="py-2 px-4 border-solid border-b-secondary-main border-b hover:text-secondary-main cursor-pointer" key={idx} onClick={item.click}>{item.title}</li>
						))}
				</ul>
			</div>
	);
};
export default Dropdown;

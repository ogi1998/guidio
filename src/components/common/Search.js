import { FaSearch } from "react-icons/fa"
import { useDispatch } from "react-redux";
import { getGuides, searchGuides } from "../../store/controllers/guideController";

let timeout;
const Search = ({ inputRef, activePage, setActivePage, isSingleUser }) => {

	const dispatch = useDispatch();

	function handleSearch(event) {
		clearTimeout(timeout);

		timeout = setTimeout(() => {
			if (event.target.value)
				dispatch(searchGuides(event.target.value));
			else {
				setActivePage(1);
				dispatch(getGuides(activePage));
			}
			timeout = null;
		}, 500);
	}
	return (
		<div className={`flex gap-5 items-center rounded-3xl text-2xl ${isSingleUser ? "w-2/3" : "w-1/2"} bg-light-main px-5 m-auto
						shadow-normal shadow-secondary-main
						focus-within:shadow-normal-focused focus-within:shadow-secondary-main`}>
			<FaSearch className="text-dark-main" />
			<input
				placeholder="Search..."
				type="text"
				className="bg-light-main outline-none w-full text-dark-main placeholder:font-light py-5"
				onChange={handleSearch}
				ref={inputRef}
			/>
		</div>
	)
}
export default Search
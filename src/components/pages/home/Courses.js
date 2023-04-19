import cardImg from "../../../assets/card_item.png";
import { FaUser } from "react-icons/fa";

import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGuides, guidesByUserId } from "../../../store/controllers/guideController";

import Search from "./Search";

const Courses = ({ user, isSingleUser}) => {
	const dispatch = useDispatch();
	const searchRef = useRef();

	const [activePage, setActivePage] = useState(1);


	const { guides, pages } = useSelector(state => state.guide.guidesData);
	const guideErrorMsg = useSelector(state => state.guide.guideErrorMsg);

	useEffect(() => {
		function handleScroll() {
			if (searchRef.current?.value)
				return;

			const scrolled = document.body.scrollHeight - window.innerHeight;
			if (scrolled === window.scrollY && pages > activePage) {
				setActivePage(activePage + 1);
			}

			if (window.scrollY < 100)
				setActivePage(1);

		}
		if (user) {
			window.addEventListener('scroll', handleScroll);

			if (activePage === pages) {
				window.removeEventListener('scroll', handleScroll);
			}
			return () => window.removeEventListener('scroll', handleScroll);
		}
	}, [activePage, pages, user]);

	useEffect(() => {
		isSingleUser ? dispatch(guidesByUserId(user?.userId, 12, activePage)) : dispatch(getGuides(12, activePage))
	}, [dispatch, isSingleUser, activePage, user?.userId]);

	return (
		<div className={`px-20 ${(!isSingleUser && user) && "pt-48 bg-secondary-light"}`}>
			{(!isSingleUser && user) &&
				<div className="flex justify-center">
					{/* <Dropdown title="Popular" items={['New', 'Popular']} /> */}
					<Search inputRef={searchRef} activePage={activePage} setActivePage={setActivePage} />
				</div>}
			<h2 className="text-5xl py-10">Recent Guides</h2>
			<div className={`grid ${!isSingleUser ? 'grid-cols-4' : 'grid-cols-3'} w-full gap-5`}>
				{guides?.length ? guides.map(guide =>
					<NavLink to={`/guides/${guide.guideId}`} className="group w-full mb-10  hover:cursor-pointer" key={`${guide.guideId} - ${guide.title}`}>
						<div className="relative">
							<img src={cardImg} alt="Card Item" />
							<div className="
						absolute top-0 w-full h-full p-4 text-light-main
						flex items-end gap-2
						group-hover:bg-gradient-to-b from-gradient-white to-gradient-secondary">
								<h3 className="text-xl">{guide.title}</h3>
							</div>
						</div>
						<div className="flex items-center gap-2 px-2 py-4 shadow-secondary-main shadow-normal bg-light-main rounded-b-3xl">
							{guide.user.userDetails?.avatar ?
								<img src={`/${guide.user.userDetails.avatar}`} className="w-16 rounded-[50%]" alt="Avatar" /> :
								<FaUser className="rounded-[50%] bg-success-main text-6xl p-1" />}
							<p className="text-lg font-semibold">{`${guide.user.firstName} ${guide.user.lastName}`} |</p>
							<span className="italic">{guide.user.userDetails?.profession?.name}</span>
						</div>
					</NavLink>
				) : <h1 className="text-danger-dark text-3xl py-5">{guideErrorMsg}</h1>}

			</div>
		</div>
	);
};
export default Courses;

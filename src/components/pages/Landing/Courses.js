import Dropdown from "../../common/Dropdown";


import cardImg from "../../../assets/card_item.png";
import { NavLink } from "react-router-dom";
import { FaEye, FaHeart, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGuides, guidesByUserId } from "../../../store/controllers/guideController";

const Courses = ({ type = "all" }) => {
	const [activePage, setActivePage] = useState(1);

	const dispatch = useDispatch();

	const { guides, pages } = useSelector(state => state.guide.guidesData);
	const userId = useSelector(state => state.user.activeUser?.userId);

	useEffect(() => {
		function handleScroll() {
			const scrolled = document.body.scrollHeight - window.innerHeight;
			if (scrolled === window.scrollY && pages > activePage) 
				setActivePage(activePage + 1);
		}

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [activePage, pages]);
	useEffect(() => {
		type === 'all' && dispatch(getGuides(12, activePage));
		type === 'single' && dispatch(guidesByUserId(userId, 12, activePage));
	}, [dispatch, type, userId, activePage])
	return (
		<div>
			<Dropdown title="Popular" items={['New', 'Popular']} />
			<div className={`grid ${type === 'all' && 'grid-cols-4'} ${type === 'single' && 'grid-cols-3'} w-full gap-5`}>
				{guides?.length ? guides.map(guide =>
					<NavLink to={`/guides/${guide.guideId}`} className="group w-full mb-10 bg-light-main hover:cursor-pointer" key={guide.guideId}>
						<div className="relative">
							<img src={cardImg} alt="Card Item" />
							<div className="
						absolute top-0 w-full h-full p-4 text-light-main
						flex items-end gap-2
						invisible group-hover:visible
						bg-gradient-to-b from-gradient-white to-gradient-secondary">
								<h3 className="text-2xl">{`${guide.user.firstName} ${guide.user.lastName}`} |</h3>
								<span className="text-lg">programmer</span>
							</div>
						</div>
						<div className="flex items-center gap-2 px-2 py-4 shadow-secondary-main shadow-normal rounded-b-3xl">
							{guide.user.userDetails?.avatar ?
								<img src={guide.user.userDetails.avatar} className="w-16 rounded-[50%]" alt="Avatar" /> :
								<FaUser className="rounded-[50%] bg-success-main text-6xl p-1" />}
							<p className="text-lg">{guide.title}</p>
							<span className="flex items-center gap-1 text-xl"><FaHeart /> 132</span>
							<span className="flex items-center gap-1 text-xl"><FaEye /> 39k</span>
						</div>
					</NavLink>
				) : <h1 className="text-danger-dark text-3xl py-5">No Guides found!</h1>}
			</div>
		</div>
	);
};
export default Courses;

import Dropdown from "../../ui/Dropdown";

import Pagination from '../../ui/Pagination';

import cardImg from "../../../assets/card_item.png";
import { NavLink, useParams } from "react-router-dom";
import { FaEye, FaHeart, FaUser } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGuides } from "../../../store/controllers/guideController";

const Courses = () => {

	const dispatch = useDispatch();
	const {id} = useParams();
	const dropdownItems = [
		{
			title: 'Popular',
			click: () => console.log('popular')
		},
		{
			title: 'New',
			click: () => console.log('new')
		}
	]

	const guides = useSelector(({guide}) => guide.guides);

	useEffect(() => {
		dispatch(getGuides(id ? id : 1));
	}, [dispatch, id])
	return (
		<div>
			<Dropdown title="Popular" items={dropdownItems} />
			<div className=" grid grid-cols-4 w-full gap-5">
				{guides?.length ? guides.map(guide =>
				<NavLink to='/' className="group w-full mb-10 bg-light-main hover:cursor-pointer" key={guide.guideId}>
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
						<FaUser className="rounded-[50%] bg-success-main text-2xl p-1" />
						<p className="text-lg">{guide.title}</p>
						<span className="flex items-center gap-1 text-xl"><FaHeart /> 132</span>
						<span className="flex items-center gap-1 text-xl"><FaEye /> 39k</span>
					</div>
				</NavLink>
				) : <h1 className="text-danger-light text-3xl py-5">Guides not found!</h1>}
			</div>
			{guides?.length ? <Pagination />: ''}
		</div>
	);
};
export default Courses;

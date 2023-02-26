import {
	Card,
	CardContent,
	CardMedia,
	Grid,
	Pagination,
	Stack,
	Typography,
	ButtonBase
} from "@mui/material";
import { Box } from "@mui/system";
import Dropdown from "../../ui/Dropdown";

import cardImg from "../../../assets/card_item.png";
import { Favorite, PersonOutline, Visibility } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { FaEye, FaHeart, FaUser } from "react-icons/fa";

const Courses = () => {
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
	return (
		<div>
			<Dropdown title="Popular" items={dropdownItems} />
			<div className="flex flex-wrap justify-between w-full">
				<div className=" w-[30%] mb-10 bg-light-main">
					<img src={cardImg} alt="Card Item" />
					<div className="flex items-center px-2 py-4 shadow-secondary-main shadow-normal rounded-b-3xl">
						<FaUser className="rounded-[50%] bg-success-main text-2xl p-1" />
						<p className="text-2xl">Lorem ipsum dolor sit amet co.</p>
						<span className="flex items-center text-xl"><FaHeart /> 132</span>
						<span className="flex items-center text-xl"><FaEye /> 39k</span>
					</div>
				</div>
				<div className=" w-[30%] mb-5 bg-light-main">
					<img src={cardImg} alt="Card Item" />
					<div className="flex items-center px-2 py-4 shadow-secondary-main shadow-normal rounded-b-3xl">
						<FaUser className="rounded-[50%] bg-success-main text-2xl p-1" />
						<p className="text-2xl">Lorem ipsum dolor sit amet co.</p>
						<span className="flex items-center text-xl"><FaHeart /> 132</span>
						<span className="flex items-center text-xl"><FaEye /> 39k</span>
					</div>
				</div>
				<div className=" w-[30%] mb-5 bg-light-main">
					<img src={cardImg} alt="Card Item" />
					<div className="flex items-center px-2 py-4 shadow-secondary-main shadow-normal rounded-b-3xl">
						<FaUser className="rounded-[50%] bg-success-main text-2xl p-1" />
						<p className="text-2xl">Lorem ipsum dolor sit amet co.</p>
						<span className="flex items-center text-xl"><FaHeart /> 132</span>
						<span className="flex items-center text-xl"><FaEye /> 39k</span>
					</div>
				</div>
				<div className=" w-[30%] mb-5 bg-light-main">
					<img src={cardImg} alt="Card Item" />
					<div className="flex items-center px-2 py-4 shadow-secondary-main shadow-normal rounded-b-3xl">
						<FaUser className="rounded-[50%] bg-success-main text-2xl p-1" />
						<p className="text-2xl">Lorem ipsum dolor sit amet co.</p>
						<span className="flex items-center text-xl"><FaHeart /> 132</span>
						<span className="flex items-center text-xl"><FaEye /> 39k</span>
					</div>
				</div>
				<div className=" w-[30%] mb-5 bg-light-main">
					<img src={cardImg} alt="Card Item" />
					<div className="flex items-center px-2 py-4 shadow-secondary-main shadow-normal rounded-b-3xl">
						<FaUser className="rounded-[50%] bg-success-main text-2xl p-1" />
						<p className="text-2xl">Lorem ipsum dolor sit amet co.</p>
						<span className="flex items-center text-xl"><FaHeart /> 132</span>
						<span className="flex items-center text-xl"><FaEye /> 39k</span>
					</div>
				</div>
				<div className=" w-[30%] mb-5 bg-light-main">
					<img src={cardImg} alt="Card Item" />
					<div className="flex items-center px-2 py-4 shadow-secondary-main shadow-normal rounded-b-3xl">
						<FaUser className="rounded-[50%] bg-success-main text-2xl p-1" />
						<p className="text-2xl">Lorem ipsum dolor sit amet co.</p>
						<span className="flex items-center text-xl"><FaHeart /> 132</span>
						<span className="flex items-center text-xl"><FaEye /> 39k</span>
					</div>
				</div>
			</div>
			<Stack alignItems="center" my={2}>
				<Pagination
					count={2}
					variant="outlined"
					shape="rounded"
					sx={{
						border: (theme) =>
							`1px solid ${theme.palette.grey.main}`,
						"& .MuiPaginationItem-root": {
							my: 5,
							borderRadius: "1px"
						},
						"& .MuiPaginationItem-root:hover": {
							color: "light.main",
							backgroundColor: "secondary.main",
						},
						"& .MuiButtonBase-root.Mui-selected": {
							color: "light.main",
							backgroundColor: "secondary.main",
						}
					}}
				/>
			</Stack>
		</div>
	);
};
export default Courses;

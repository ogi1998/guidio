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
import ComboBox from "../../ui/ComboBox";

import cardImg from "../../../assets/card_item.png";
import { Favorite, PersonOutline, Visibility } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Courses = () => {
	return (
		<Box>
			<ComboBox />
			<Grid my={2} container spacing={8}>
				{[1, 2, 3, 4, 5, 6].map((item) => (
					<Grid item sm={12} md={4} key={item}>
						<Card
							component={ButtonBase}
							LinkComponent={NavLink}
							to="/login"
							sx={{
								display: "block",
								maxWidth: "100%",
								borderRadius: "30px",
								boxShadow: (theme) =>
									`0px 1px 10px ${theme.palette.secondary.main}`,
							}}
						>
							<CardMedia
								sx={{
									height: 300,
									background: `url(${cardImg})`,
									backgroundSize: "cover",
									":hover": {
										background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(114, 124, 245, 0.6) 73.44%),
										linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))
										, url(${cardImg})`,
										backgroundSize: "cover",
									},
								}}
								component="div"
							/>

							<CardContent
								sx={{
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<Box display="flex" alignItems="center">
									<PersonOutline
										sx={{
											mr: 1,
											backgroundColor: "success.main",
											borderRadius: "50%",
										}}
									/>
									<Typography variant="h5">
										Lorem ipsum dolor sit amet co.
									</Typography>
								</Box>
								<Box display="flex" fontSize={20}>
									<Box
										display="flex"
										alignItems="center"
										mr={1}
									>
										<Favorite /> 132
									</Box>
									<Box display="flex" alignItems="center">
										<Visibility />
										39k
									</Box>
								</Box>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
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
		</Box>
	);
};
export default Courses;

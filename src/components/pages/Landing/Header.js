import { Search } from "@mui/icons-material";
import { InputAdornment, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SearchInput from "../../ui/SearchInput";

const Header = () => {
	return (
		<Box py={10} textAlign="center" minHeight="95vh">
			<Typography variant="h2" fontWeight="bold" my={7}>
				Learn Anytime, Anywhere, <br />
				and Accelerate Future
			</Typography>
			<SearchInput
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Search sx={{ fontSize: "2rem" }} />
						</InputAdornment>
					),
				}}
				placeholder="Search..."
				sx={{ width: "50%" }}
			/>
		</Box>
	);
};
export default Header;

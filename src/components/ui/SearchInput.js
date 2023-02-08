import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const SearchInput = styled(TextField)(({theme}) => ({
	"&": {
		backgroundColor: theme.palette.light.main,
		borderRadius: "20px"
		
	},
	"& fieldset": {
		borderRadius: "20px",
		boxShadow: `0px 1px 10px ${theme.palette.secondary.main}`,
		border: "none",
		transition: '.05s ease'
	},
	"& input": {
		borderRadius: "20px",
		fontSize: "1.5rem"
	},
	"& .MuiInputBase-root.Mui-focused fieldset": {
		boxShadow: `0px 1px 30px ${theme.palette.secondary.main}`,
		transition: '.1s ease'
	},
	"& .MuiInputBase-root input::placeholder": {
		fontWeight: "300"
	}
}));

export default SearchInput;
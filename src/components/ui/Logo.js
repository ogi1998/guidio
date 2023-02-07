import { Typography, Box } from "@mui/material"

const Logo = ({ inFooter = false }) => {
	return (
		<Typography display="inline" borderBottom={inFooter && "2px solid"} color='light.main' component="h1" variant="h4" fontWeight="bold" pb={{ xs: inFooter ?0.5 : 2, md: inFooter ? 0.5 : 0 }}>
			Guid
			<Box display="inline" color="success.main">
				.
			</Box>
			<Box display="inline" color='secondary.main'>io</Box>
		</Typography>
	)
}
export default Logo
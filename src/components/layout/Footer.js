import { Box, Typography } from "@mui/material"

const Footer = () => {
  return (
	<Box component='footer' mt='auto' p={2} textAlign='center'  sx={{backgroundColor: theme => theme.palette.primary.main}}>
		<Typography color='light.main'>&copy; 2023 Guidio. All rights reserved.</Typography>
	</Box>
  )
}
export default Footer
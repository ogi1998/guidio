import { Google, LinkedIn, Telegram } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import Logo from "../ui/Logo"

const Footer = () => {
	return (
		<Box component='footer' mt='auto' p={2} textAlign='center' sx={{ backgroundColor: 'primary.main' }}>
			<Logo inFooter={true} />
			<Box display='flex' justifyContent='center' gap={2} alignSelf="center" my={2}>
				<Link to='https://linkedin.com' target='_blank'>
					<LinkedIn color="light" />
				</Link>
				<Link to='https://google.com' target='_blank'>
					<Google color="light" />
				</Link>
				<Link to='https://telegram.org' target='_blank'>
					<Telegram color="light" />
				</Link>
			</Box>
			<Typography color='light.main'>&copy; 2023 Guidio. All rights reserved.</Typography>
		</Box>
	)
}
export default Footer
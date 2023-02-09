import { Box } from "@mui/material"
import Courses from "./Courses"
import Header from "./Header"

const Landing = () => {
  return (
	<Box px={10}>
		<Header />
		<Courses />
	</Box>
  )
}
export default Landing
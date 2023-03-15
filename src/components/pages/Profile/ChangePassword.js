import InputGroup from "./common/InputGroup"

const ChangePassword = ({show}) => {
  return (
	<div className={`${!show && "hidden"} flex gap-20`}>
		<InputGroup type="password" text="Password" color="success" />
		<InputGroup type="password" text="Confirm Password" color="success" />
	</div>
  )
}
export default ChangePassword
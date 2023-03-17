import InputGroup from "./common/InputGroup"

const ChangePassword = ({currentPwRef, pwRef}) => {
  return (
	<div className='flex gap-20'>
		<InputGroup type="password" text="Password" color="success" defaultValue="" fieldRef={currentPwRef} />
		<InputGroup type="password" text="New Password" color="success" defaultValue="" fieldRef={pwRef} />
	</div>
  )
}
export default ChangePassword
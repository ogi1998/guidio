import InputGroup from "./common/InputGroup"

const ChangePassword = ({pw, onChangePw, newPw, onChangeNewPw}) => {
  return (
	<div className='flex gap-20'>
		<InputGroup type="password" text="Password" color="success" value={pw} onChange={onChangePw} />
		<InputGroup type="password" text="New Password" color="success" value={newPw} onChange={onChangeNewPw} />
	</div>
  )
}
export default ChangePassword
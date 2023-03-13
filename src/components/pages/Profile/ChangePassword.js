const ChangePassword = () => {
  return (
	<div>
	<div className="w-full mb-10">
		<label className="block font-semibold mb-2">
			Current Password
		</label>
		<input
			type="password"
			className="w-full border-2 border-success-main py-1 px-2 text-dark-main"
		/>
	</div>
	<div className="w-full">
		<label className="block font-semibold mb-2">
			New Password
		</label>
		<input
			type="password"
			className="w-full border-2 border-success-main py-1 px-2 text-dark-main"
		/>
	</div>
</div>
  )
}
export default ChangePassword
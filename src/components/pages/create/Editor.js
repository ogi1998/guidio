const Editor = ({value, onChange}) => {
  return (
	<textarea className=" resize-none min-h-[200px]" value={value} onChange={onChange} />
  )
}
export default Editor
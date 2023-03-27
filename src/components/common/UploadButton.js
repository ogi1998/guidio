const UploadButton = ({ uploadRef, text, onUpload, color }) => {
	return (
		<div className="z-10">
			<input
				type="file"
				hidden
				ref={uploadRef}
				accept="image/png, image/gif, image/jpeg"
				onChange={onUpload}
			/>
			<button
				className={`${color === "dark" && "bg-primary-main text-light-main"} ${color === "light" && "bg-light-main text-secondary-main"} p-4 font-semibold rounded-md shadow-normal
				hover:shadow-normal-hover text-xl`}
				onClick={() => uploadRef.current.click()}
			>
				{text}
			</button>
		</div>
	);
};
export default UploadButton;

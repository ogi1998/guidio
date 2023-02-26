import logo from '../../assets/logo.png';

const Logo = ({ inFooter = false }) => {


	return (
		<div className={`
		${!inFooter && "absolute left-1/2 -translate-y-8 -translate-x-1/2 bg-primary-main py-8 px-8 rounded-[50%]"}
		${inFooter && "mb-5"}
		`}>
			<img src={logo} alt="Guid.io Logo" />
		</div>
	);
};
export default Logo;

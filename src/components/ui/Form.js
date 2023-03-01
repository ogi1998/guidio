import { NavLink } from "react-router-dom";

import logo from '../../assets/logo.png';

const Form = (props) => {
	return (
		<div className=" w-screen h-screen bg-form bg-cover flex justify-center items-center">
		<div className="w-1/2 bg-form bg-cover flex shadow-normal-focused shadow-secondary-main">
			<div className="w-1/2 relative">
				<NavLink to='/' className="bg-primary-main p-10 rounded-[50%] absolute left-1/4 top-10">
					<img src={logo} alt="Guidio logo" className=' w-36' />
				</NavLink>
			</div>
			<form className="py-10 mr-10 w-1/2">
				{props.children}
			</form>
		</div>
	</div>
	);
};
export default Form;

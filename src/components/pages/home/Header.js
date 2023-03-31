import { useSelector } from 'react-redux';
import Alert from '../../common/Alert';
import hero from '../../../assets/hero-img.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
	const successMsg = useSelector(state => state.ui.successMsg);
	const activeUser = useSelector(state => state.user.activeUser);
	return (
		<div>
			<div className='flex justify-center absolute top-44 w-full'>
				<Alert type="success" size='fit' msg={successMsg} />
			</div>
			{!activeUser && <div className="h-[95vh] bg-hero bg-no-repeat bg-cover">
				<div className='flex px-20 gap-40'>
					<div className='flex flex-col pt-10'>
						<h2 className=" font-medium my-[2rem] text-[5rem] text-light-main" style={{lineHeight: "100px"}}>
							Learn Anytime, <br />
							Anywhere, and see<br />
							the Future
						</h2>
						<h3 className='text-light-main text-3xl font-light' style={{lineHeight: "50px"}}>
						Unlock Your Potential and Inspire Others to Learn.<br />
						Join our platform to educate and share your expertise.
						</h3>
						<NavLink to='/register' className='bg-success-main text-primary-main text-center font-bold text-4xl
						py-8 rounded-3xl w-1/2 self-center mt-20
						hover:text-light-main hover:shadow-normal-hover hover:shadow-success-main'>Start Creating!</NavLink>
					</div>
					<div className='self-center'>
						<img className="block" src={hero} alt="Hero" />
					</div>
				</div>
			</div>}
		</div>
	);
};
export default Header;

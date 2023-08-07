import './SplashPage.css'
import { Link } from 'react-router-dom'

function SplashPage(props) {
	return (
		<div className='splash-container d-flex flex-column pt-5'>
			<h1 className='trademark fs-4'>Track It</h1>
			<Link to='/sign-in'>
				<h2 className='sign_in_btn btn'>Sign in</h2>
			</Link>
			<div className='text-left'>
				<span className='d-block title-text mb-3'>
					The only analytics platform
				</span>
				<span className='d-block title-text mb-5'>you'll ever need</span>
			</div>
			<Link to='/sign-up'>
				<button className='btn bg-dark text-white '>Get Started</button>
			</Link>
		</div>
	);
}

export default SplashPage;

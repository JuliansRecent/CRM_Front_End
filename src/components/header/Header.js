import React from 'react';
import '../header/Header.css';
import Icon from '../../images/profile-icon.png';
import Navbar from '../../navbar/Navbar';

function Header(props) {
	return (
		<header className='shadow '>
			<Navbar />
			<a href='#'>
				<img className='profile-icon' src={Icon} alt='Profile-icon' />
			</a>
		</header>
	);
}

export default Header;
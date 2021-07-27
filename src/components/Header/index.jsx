import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Content, Nav } from './styles';

import plateaLogoWhite from '../../assets/platea-logo-white.svg';

export default function Header() {
	return (
		<Container>
			<Content>
				<div className='logo'>
					<NavLink to='/'>
						<img src={plateaLogoWhite} alt='Platea Logo' />
					</NavLink>
				</div>
				<Nav>
					<ul>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/cases'>Cases</NavLink>
						</li>
						<li>
							<NavLink to=''>Contato</NavLink>
						</li>
					</ul>
				</Nav>
			</Content>
		</Container>
	);
}

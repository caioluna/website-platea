import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Content, Nav } from './styles';

import plateaCircleLogo from '../../assets/platea_circle_logo.svg';

export default function Header() {
	return (
		<Container>
			<Content>
				<div className='logo'>
					<NavLink to='/'>
						<img src={plateaCircleLogo} alt='Platea Logo' />
					</NavLink>
					<Nav>
						<ul>
							<div className='left'>
								<li>
									<NavLink to=''>Sobre</NavLink>
								</li>
								<li>
									<NavLink to=''>Serviços</NavLink>
								</li>
							</div>
							<div className='right'>
								<li>
									<NavLink to=''>Cases</NavLink>
								</li>
								<li>
									<NavLink to=''>Contato</NavLink>
								</li>
							</div>
						</ul>
					</Nav>
				</div>
			</Content>
		</Container>
	);
}

import React from 'react';

import { Container, Content, Nav } from './styles';

import plateaLogoWhite from '../../assets/platea-logo-white.svg';

export default function Header() {
	return (
		<Container>
			<Content>
				<div className='logo'>
					<img src={plateaLogoWhite} alt='Platea Logo' />
				</div>
				<Nav>
					<ul>
						<li>
							<a href='!#'>Agência</a>
						</li>
						<li>
							<a href='!#'>Cases</a>
						</li>
						<li>
							<a href='!#'>Contato</a>
						</li>
					</ul>
				</Nav>
			</Content>
		</Container>
	);
}

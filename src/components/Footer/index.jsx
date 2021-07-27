import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Links, Logo, Address } from './styles';

import plateaLogo from '../../assets/platea-logo-dark.svg';

export default function Footer() {
	return (
		<Container>
			<div className='background-circles'>
				<div className='circle'></div>
				<div className='circle'></div>
				<div className='circle'></div>
				<div className='circle'></div>
				<div className='circle'></div>
			</div>
			<Content>
				<Logo>
					<Link to='/'>
						<img src={plateaLogo} alt='Logo Platea' />
					</Link>
					<p>
						Vem criar com a gente!
						<br />
						Faça o seu projeto com a Platea.
					</p>
					<a href='https://www.instagram.com/platea.promo/' target='_blank'>
						<span className='instagram-icon'></span>
					</a>
				</Logo>

				<Links>
					<div className='map'>
						<h3>Mapa do site</h3>
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/cases'>Cases</Link>
							</li>
							<li>
								<Link to=''>Contato</Link>
							</li>
						</ul>
					</div>

					<div className='our-services'>
						<h3>Nossos serviços</h3>
						<ul>
							<li>
								<Link to=''>Press kits</Link>
							</li>
							<li>
								<Link to=''>Brindes</Link>
							</li>
							<li>
								<Link to=''>Design Gráfico</Link>
							</li>
						</ul>
					</div>
				</Links>

				<Address>
					<p className='location'>
						Avenida Onze de Junho - 1070
						<br />
						Conjunto 508
						<br />
						Vila Clementino | São Paulo
					</p>

					<p className='copyright'>
						© 2021 Platea. Todos os direitos reservados.
					</p>
				</Address>
			</Content>
		</Container>
	);
}

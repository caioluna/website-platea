import React from 'react';

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
					<img src={plateaLogo} alt='Logo Platea' />
					<p>
						Vem criar com a gente!
						<br />
						Faça o seu projeto com a Platea.
					</p>
					<a href=''>
						<span className='instagram-icon'></span>
					</a>
				</Logo>

				<Links>
					<div className='map'>
						<h3>Mapa do site</h3>
						<ul>
							<li>
								<a href=''>A agência</a>
							</li>
							<li>
								<a href=''>Serviços</a>
							</li>
							<li>
								<a href=''>Cases</a>
							</li>
							<li>
								<a href=''>Contato</a>
							</li>
						</ul>
					</div>

					<div className='our-services'>
						<h3>Nossos serviços</h3>
						<ul>
							<li>
								<a href=''>Press kits</a>
							</li>
							<li>
								<a href=''>Brindes</a>
							</li>
							<li>
								<a href=''>Design Gráfico</a>
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

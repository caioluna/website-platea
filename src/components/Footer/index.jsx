import React from 'react';
import { Container, Content, MenuTree, UpperWrap } from './styles';

export default function Footer() {
	return (
		<Container>
			<span className='whiteLine'></span>
			<Content>
				<UpperWrap>
					<MenuTree>
						<div className='map'>
							<h3>Mapa do site</h3>
							<ul>
								<li>
									<a href='/'>A agência</a>
								</li>
								<li>
									<a href='/'>Cases</a>
								</li>
								<li>
									<a href='/'>Serviços</a>
								</li>
								<li>
									<a href='/'>Contato</a>
								</li>
							</ul>
						</div>
						<div className='services'>
							<h3>Nossos serviços</h3>
							<ul>
								<li>
									<a href='/'>Press kits</a>
								</li>
								<li>
									<a href='/'>Brindes</a>
								</li>
								<li>
									<a href='/'>Design Gráfico</a>
								</li>
							</ul>
						</div>
						<div className='contact'>
							<h3>Contato</h3>
							<ul>
								<li>
									<a href='tel:+551143282033'>(11) 4328 2033</a>
								</li>
							</ul>
						</div>
					</MenuTree>
					<div className='logo'>
						<img src='' alt='Logo Platea' />
						<p>
							Avenida Onze de Junho 1070
							<br /> Conjunto 508
							<br /> Vila Clementino | São Paulo
						</p>
					</div>
				</UpperWrap>
				<div className='copy'>
					2021 © Copyright - Todos os direitos reservados | Platea Promoções e
					Comunicação.
				</div>
			</Content>
		</Container>
	);
}

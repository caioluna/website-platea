import React from 'react';

import { About, Container, Content } from './styles';

import triForm1 from '../../assets/tri-form-1.png';
import triForm2 from '../../assets/tri-form-2.png';
import triForm3 from '../../assets/tri-form-3.png';

export default function Agency() {
	return (
		<Container>
			<Content>
				<About>
					<h1>A agência</h1>
					<p>
						Cativar mentes e corações. Entreter, seduzir, engajar. Nosso
						objetivo aqui é ajudar você, sua marca, seu serviço, seu produto a
						conquistar a plateia. Vem fazer bonito e ganhar aplausos com a
						gente.
					</p>
					<p>
						Uma agência de comunicação e promoções especializada em criação e
						gestão de logística de press kits, brindes e criação de campanhas
						visuais. Nosso comprometimento é com o seu sucesso e por isso
						trabalhamos com seriedade, prezando sempre pela honestidade nas
						nossas relações.
					</p>
				</About>
			</Content>
			<div className='form-wrapper'>
				<img className='tri-form' src={triForm1} alt='' />
				<img className='tri-form' src={triForm2} alt='' />
				<img className='tri-form' src={triForm3} alt='' />
			</div>
		</Container>
	);
}

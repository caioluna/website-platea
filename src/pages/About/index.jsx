import React from 'react'

import { Container, Content, Section } from './styles'

export default function About() {
	return (
		<Container>
			<Content>
				<Section>
					<div className='agency-text'>
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
					</div>
				</Section>
			</Content>
		</Container>
	)
}

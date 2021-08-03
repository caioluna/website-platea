import React from 'react'
import { motion } from 'framer-motion'

import CloseButton from '../../components/CloseButton'
import GeoForm from '../../components/GeoForm'

import { Container, Content, Text } from './styles'

export default function About() {
	return (
		<Container
			as={motion.main}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<CloseButton />
			<Content>
				<h1 className='page-title'>A agência</h1>
				<Text>
					<div className='agency-text'>
						<p>
							Cativar mentes e corações. Entreter, seduzir, engajar. Nosso
							objetivo aqui é ajudar você, sua marca, seu serviço, seu produto a
							conquistar a plateia. Vem fazer bonito e ganhar aplausos com a
							gente.
							<br />
							<br />
							Uma agência de comunicação e promoções especializada em criação e
							gestão de logística de press kits, brindes e criação de campanhas
							visuais. Nosso comprometimento é com o seu sucesso e por isso
							trabalhamos com seriedade, prezando sempre pela honestidade nas
							nossas relações.
						</p>
					</div>
				</Text>
			</Content>
			<GeoForm />
		</Container>
	)
}

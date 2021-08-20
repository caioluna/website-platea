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
				<motion.h1
					className='page-title'
					initial={{ opacity: 0, y: 300 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, type: 'spring', stiffness: 60 }}
				>
					A agência
				</motion.h1>
				<Text>
					<div className='agency-text'>
						<motion.p
							initial={{ opacity: 0, x: 300 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.6, type: 'spring', stiffness: 60 }}
						>
							Cativar mentes e corações. Entreter, seduzir, engajar. Nosso
							objetivo aqui é ajudar você, sua marca, seu serviço, seu produto a
							conquistar a plateia. Vem fazer bonito e ganhar aplausos com a
							gente.
						</motion.p>
						<br />
						<motion.p
							initial={{ opacity: 0, x: 300 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.7, type: 'spring', stiffness: 60 }}
						>
							Uma agência de comunicação e promoções especializada em criação e
							gestão de logística de press kits, brindes e criação de campanhas
							visuais. Nosso comprometimento é com o seu sucesso e por isso
							trabalhamos com seriedade, prezando sempre pela honestidade nas
							nossas relações.
						</motion.p>
					</div>
				</Text>
			</Content>
			<GeoForm />
		</Container>
	)
}

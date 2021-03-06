import React from 'react'
import { motion } from 'framer-motion'

import CloseButton from '../../components/CloseButton'
import GeoForm from '../../components/GeoForm'

import { Container, Content, Text } from './styles'

const container = {
	animate: {
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.1,
		},
	},
}

const textVariants = {
	initial: { opacity: 0, x: 300 },
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			duration: 1,
		},
	},
}

export default function About() {
	return (
		<Container
			as={motion.main}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { ease: 'easeInOut', duration: 0.5 } }}
			exit={{ opacity: 0 }}
		>
			<CloseButton />
			<Content>
				<motion.h1
					className='page-title'
					initial={{ opacity: 0, y: 300 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, type: 'spring', duration: 0.5 }}
				>
					A agência
				</motion.h1>
				<Text>
					<motion.div
						className='agency-text'
						variants={container}
						initial='initial'
						animate='animate'
					>
						<motion.p variants={textVariants}>
							Cativar mentes e corações. Entreter, seduzir, engajar. Nosso
							objetivo aqui é ajudar você, sua marca, seu serviço, seu produto a
							conquistar a plateia. Vem fazer bonito e ganhar aplausos com a
							gente.
						</motion.p>
						<br />
						<motion.p variants={textVariants}>
							Somos uma agência de comunicação e promoções especializada em
							criação e gestão de logística de press kits, brindes e criação de
							campanhas visuais. Nosso comprometimento é com o seu sucesso e por
							isso trabalhamos com seriedade, prezando sempre pela honestidade
							nas nossas relações.
						</motion.p>
					</motion.div>
				</Text>
			</Content>
			<GeoForm />
		</Container>
	)
}

import React from 'react'

import { Container, Content } from './styles'

import plateaLogoHero from '../../assets/platea-logo-hero.svg'

import { motion } from 'framer-motion'
import GeoForm from '../../components/GeoForm'

export default function Home() {
	return (
		<Container
			as={motion.main}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Content>
				<img
					className='hero-logo'
					src={plateaLogoHero}
					alt='Platea Hero Logo'
				/>
			</Content>
			<GeoForm />
		</Container>
	)
}

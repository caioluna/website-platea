import { motion } from 'framer-motion'
import React from 'react'
import GeoForm from '../../components/GeoForm'
import { Container } from './styles'

export default function Contact() {
	const container = {
		show: {
			transition: {
				staggerChildren: 0.3,
			},
		},
	}

	const item = {
		hidden: {
			x: -150,
			opacity: 0,
		},
		show: {
			x: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				duration: 1,
			},
		},
	}
	return (
		<Container>
			<GeoForm />
			<motion.div
				className='wrap'
				variants={container}
				initial='hidden'
				animate='show'
			>
				<motion.div variants={item} className='item'>
					1
				</motion.div>
				<motion.div variants={item} className='item'>
					2
				</motion.div>
				<motion.div variants={item} className='item'>
					3
				</motion.div>
				<motion.div variants={item} className='item'>
					4
				</motion.div>
			</motion.div>
		</Container>
	)
}

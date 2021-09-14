import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Container } from './styles'

export default function BoxItem({ icon, description, title, variants }) {
	const [show] = useState(false)

	const showVariants = {
		hide: {
			opacity: 0,
			zIndex: -1,
		},
		show: {
			opacity: 1,
			zIndex: 1,
			transition: {
				type: 'spring',
				duration: 0.5,
			},
		},
	}

	const boxVariants = {
		hide: {
			borderColor: 'rgba(255,255,255,0.2)',
		},
		show: {
			duration: 1,
			height: 280,
			borderColor: 'rgba(255,255,255,1)',
		},
	}

	const boxContentVariants = {
		hide: {
			opacity: 0.2,
		},
		show: {
			opacity: 1,
			borderOpacity: 1,
		},
	}

	return (
		<Container variants={variants}>
			<motion.div
				className='box'
				variants={boxVariants}
				initial={false}
				animate={show ? 'show' : 'hide'}
				whileHover='show'
				whileTap='show'
			>
				<motion.h4 variants={boxContentVariants}>{title}</motion.h4>
				<motion.img
					variants={boxContentVariants}
					src={icon}
					alt={title + ' icon'}
				/>
				<motion.span variants={showVariants}>{description}</motion.span>
			</motion.div>
		</Container>
	)
}

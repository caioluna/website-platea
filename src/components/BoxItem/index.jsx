import { AnimateSharedLayout, motion } from 'framer-motion'
import React, { useState } from 'react'
import { Container } from './styles'

export default function BoxItem({ icon, description, title, variants }) {
	const [show] = useState(false)

	const showVariants = {
		hide: {
			opacity: 0,
			// y: 0,
			zIndex: -1,
		},
		show: {
			opacity: 1,
			// y: 75,
			zIndex: 1,
			transition: {
				type: 'spring',
				duration: 1,
			},
		},
	}

	const boxVariants = {
		hide: {
			borderColor: 'rgba(255,255,255,0.2)',
		},
		show: {
			height: 280,
			scale: 1.3,
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
				// layout
				className='box'
				variants={boxVariants}
				initial={false}
				animate={show ? 'show' : 'hide'}
				exit='end'
				whileHover='show'
				whileTap='show'
			>
				<motion.h4 variants={boxContentVariants}>{title}</motion.h4>
				<motion.img
					src={icon}
					alt={title + ' icon'}
					variants={boxContentVariants}
				/>
				<motion.span variants={showVariants}>{description}</motion.span>
			</motion.div>
		</Container>
	)
}

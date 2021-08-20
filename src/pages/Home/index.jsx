import React from 'react'

import { Container, Content } from './styles'

import { motion } from 'framer-motion'
import GeoForm from '../../components/GeoForm'

export default function Home() {
	const pathVariant = {
		show: {
			pathSpacing: [0.5, 1],
			pathLength: [0, 1],
			fillOpacity: [0, 0, 0, 0, 0, 1],
			strokeWidth: [6, 6, 6, 0],
			transition: {
				delay: 0.5,
				duration: 2.5,
				ease: 'easeInOut',
			},
		},
	}

	return (
		<Container
			as={motion.main}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Content>
				<motion.svg
					className='hero-logo'
					width='154'
					height='700'
					viewBox='0 0 154 700'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					animate='show'
				>
					<motion.path
						d='M96.0718 665.65L96.0718 668.65L99.0718 668.65L151 668.65L151 697L3 697L3 644.602C3 635.031 5.19478 627.032 9.44784 620.441C13.7774 613.732 19.4291 608.647 26.4656 605.115C33.5599 601.603 41.2497 599.828 49.5223 599.828C57.7383 599.828 65.3736 601.602 72.4697 605.139L72.4736 605.141C79.5364 608.649 85.2163 613.735 89.574 620.448C93.8522 627.039 96.0718 635.061 96.0718 644.626L96.0718 665.65ZM65.0609 668.65L68.0609 668.65L68.0609 665.65L68.0608 646.107C68.0608 642.613 67.2358 639.373 65.4483 636.554C63.7302 633.845 61.4531 631.736 58.5814 630.297C55.7848 628.895 52.7688 628.202 49.5766 628.202C46.382 628.202 43.3714 628.896 40.557 630.291C37.664 631.724 35.351 633.83 33.6235 636.554L33.6196 636.56L33.6157 636.567C31.8398 639.397 31.0109 642.605 31.0109 646.107L31.0109 665.65L31.0109 668.65L34.0109 668.65L65.0609 668.65Z'
						fill='#FDDB00'
						stroke='#FDDB00'
						strokeWidth='6'
						variants={pathVariant}
					/>
					<motion.path
						d='M120.315 547.539L123.315 547.539L123.315 544.539L123.315 488.809L151 488.809L151 575.888L3 575.888L3 547.539L120.315 547.539Z'
						fill='#FDDB00'
						stroke='#FDDB00'
						strokeWidth='6'
						variants={pathVariant}
					/>
					<motion.path
						d='M151 346.121L151 375.587L130.276 381.505L126.915 382.464L128.373 385.641L151 434.94L151 466.113L3 417.236L3 394.997L151 346.121Z'
						fill='#FDDB00'
						stroke='#FDDB00'
						strokeWidth='6'
						variants={pathVariant}
					/>
					<motion.path
						d='M33.6849 319.92L30.6849 319.92L30.6849 322.92L30.6849 354.369L3 354.369L3 257.123L30.6849 257.123L30.6849 288.546L30.6849 291.546L33.6849 291.546L151 291.546L151 319.92L33.6849 319.92Z'
						fill='#FDDB00'
						stroke='#FDDB00'
						strokeWidth='6'
						variants={pathVariant}
					/>
					<motion.path
						d='M120.315 206.339L123.315 206.339L123.315 203.339L123.315 145.585L151 145.585L151 234.688L3 234.688L3 145.585L30.6849 145.585L30.6849 203.339L30.6849 206.339L33.6849 206.339L59.4648 206.339L62.4648 206.339L62.4648 203.339L62.4648 154.419L90.1769 154.419L90.1769 203.339L90.1769 206.339L93.1769 206.339L120.315 206.339Z'
						fill='#FDDB00'
						stroke='#FDDB00'
						strokeWidth='6'
						variants={pathVariant}
					/>
					<motion.path
						d='M151 4.67291L151 34.1373L130.279 40.032L126.914 40.9892L128.373 44.1689L151 93.4687L151 124.641L3 75.7647L3 53.5258L151 4.67291Z'
						fill='#FDDB00'
						stroke='#FDDB00'
						strokeWidth='6'
						variants={pathVariant}
					/>
				</motion.svg>
			</Content>
			<GeoForm />
		</Container>
	)
}

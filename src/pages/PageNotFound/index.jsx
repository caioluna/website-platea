import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import GeoForm from '../../components/GeoForm'
import CloseButton from '../../components/CloseButton'

const container = {
	animate: {
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.1,
		},
	},
}

const ErrorVariants = {
	initial: {
		opacity: 0,
		scale: 0,
	},
	animate: {
		opacity: 1,
		scale: 1,
		transition: {
			type: 'spring',
			duration: 0.5,
		},
	},
}

const titleVariants = {
	initial: { opacity: 0, y: -300 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			duration: 0.6,
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

export default function PageNotFound() {
	return (
		<Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { ease: 'easeInOut', duration: 0.5 } }}
			exit={{ opacity: 0 }}
		>
			<CloseButton />
			<GeoForm />

			<Content variants={container} initial='initial' animate='animate'>
				<motion.span variants={ErrorVariants}>404</motion.span>
				<motion.h1 variants={titleVariants}>Eita!</motion.h1>
				<motion.p variants={textVariants}>
					Não encontramos essa página...
				</motion.p>
				<motion.p variants={textVariants}>
					Que tal voltar para a <Link to='/'>página inicial</Link> e tentar mais
					tarde?
				</motion.p>
			</Content>
		</Container>
	)
}

const Container = styled(motion.main)`
	position: relative;
	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: flex-start;
	justify-content: center;

	color: #fff;
`

const Content = styled(motion.section)`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	height: 100vh;
	width: 1040px;

	span {
		position: absolute;
		right: 80px;
		top: 30px;

		font-size: 200px;
		font-family: 'DINAlternateBlack';
		color: #fddb00;
	}

	h1 {
		font-size: 64px;
		line-height: 70px;
		text-align: center;
		font-family: 'DINAlternateBlack', sans-serif;
		color: #fddb00;
		margin-bottom: 30px;
	}

	a {
		color: #fddb00;
	}

	p {
		font-size: 16px;
		line-height: 30px;
		color: #fff;
	}

	@media (max-width: 460px) {
		width: 100vw;
		padding: 100px 20px 0;

		text-align: center;
		align-items: center;

		overflow: hidden;

		span {
			position: absolute;
			right: 0;
			left: 0;
			top: 80px;
			text-align: center;

			font-size: 150px;
		}
	}
`

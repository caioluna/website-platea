import React from 'react'
import { motion } from 'framer-motion'

import geoFormFull from '../../assets/geo-form-full.svg'

import styled from 'styled-components'

export default function GeoForm() {
	return (
		<Background>
			<motion.img
				className='geoform left'
				src={geoFormFull}
				alt='Geometric background left form'
				initial={{ x: -1000, rotate: 120 }}
				animate={{ x: 0 }}
				transition={{ delay: 0.1, type: 'spring', stiffness: 45 }}
			/>
			<motion.img
				className='geoform right'
				src={geoFormFull}
				alt='Geometric background right form'
				initial={{ x: 1000, rotate: 120 }}
				animate={{ x: 0 }}
				transition={{ type: 'spring', stiffness: 45 }}
			/>
		</Background>
	)
}

const Background = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	z-index: -999;

	.geoform {
		position: absolute;
		transform: rotate(120deg);
	}

	.left {
		left: -560px;
		top: 190px;
	}

	.right {
		right: -710px;
		bottom: -400px;
	}
`

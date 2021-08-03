import React from 'react'

import geoFormFull from '../../assets/geo-form-full.svg'

import styled from 'styled-components'

export default function GeoForm() {
	return (
		<Background>
			<img
				className='geoform left'
				src={geoFormFull}
				alt='Geometric background left form'
			/>
			<img
				className='geoform right'
				src={geoFormFull}
				alt='Geometric background right form'
			/>
		</Background>
	)
}

const Background = styled.div`
	.geoform {
		position: absolute;
		z-index: -999;
		transform: rotate(120deg);
	}

	.left {
		left: -25vw;
		top: 20vh;
		height: 95vh;
	}

	.right {
		right: -40vw;
		bottom: -30vh;
		height: 95vh;
	}
`

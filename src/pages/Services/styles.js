import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.section)`
	position: relative;
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	overflow-x: hidden;

	@media (max-width: 460px) {
		height: auto;
	}
`

export const Content = styled.div`
	width: 1040px;
	height: 100vh;

	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 200px;

	h1 {
		font-size: 64px;
		line-height: 40px;
		color: #fddb00;
		font-family: 'DINAlternateBlack';
		margin-bottom: 145px;
	}

	.box-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;

		grid-template-columns: repeat(4, 1fr);
	}

	@media (max-width: 460px) {
		.box-wrapper {
			flex-direction: column;
			justify-content: space-between;
			padding-bottom: 150px;
		}

		h1 {
			position: absolute;
			width: 100px;

			font-size: 32px;
			top: 10px;
			left: 20px;
		}
	}
`

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
`

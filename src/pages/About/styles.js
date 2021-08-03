import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.main)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100vw;
	height: 100vh;

	overflow: hidden;
`

export const Content = styled.section`
	position: inherit;

	width: 1040px;
	height: inherit;

	.page-title {
		position: absolute;
		left: 0;
		bottom: 220px;

		font-size: 64px;
		color: #fddb00;
		font-family: 'DINAlternateBlack';
		margin-bottom: 50px;
	}
`

export const Text = styled.div`
	display: flex;
	border-radius: 8px;

	.agency-text {
		position: absolute;
		top: 160px;
		right: 0;
		width: 510px;

		p {
			font-size: 16px;
			line-height: 30px;
			color: #fff;
		}
	}
`

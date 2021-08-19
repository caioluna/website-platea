import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.main)`
	position: relative;
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	width: 100vw;
	overflow: hidden;
`

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 1040px;
	height: 100vh;

	.hero-logo {
		position: absolute;
		left: 165px;
		width: 150px;
	}
`

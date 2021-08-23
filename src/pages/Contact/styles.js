import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.section)`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	overflow-x: hidden;
	color: white;
`

export const Content = styled.div`
	width: 1040px;
	height: 100vh;

	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 200px;
`

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
		left: 0;

		transform: rotate(-90deg);
		width: 35vw;
	}

	.hero {
		display: flex;
		justify-content: center;
		align-items: center;

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

		.geo-white {
			top: -80px;
			left: 0;
		}

		.geo-yellow {
			top: -80px;
			right: 0;
			animation: swingRight 10s infinite;
		}

		.hero-wrapper {
			position: relative;

			display: flex;
			justify-content: center;
			align-items: center;

			.hero-forms {
				position: absolute;
				width: 200px;
				height: 10px;
				opacity: 0;

				background: #fff;

				transition: all 0.3s;

				&:nth-of-type(1) {
					transform: rotate(-105deg) translateX(-200px) translateY(400px);
					animation: turn1 1s ease 0.5s forwards;
				}

				&:nth-of-type(2) {
					transform: rotate(-61deg) translateX(-40px) translateY(420px);
					animation: turn2 1s ease 0.7s forwards;
				}
				&:nth-of-type(3) {
					transform: rotate(-7deg) translateX(140px) translateY(300px);
					animation: turn3 1s ease 0.9s forwards;
				}
			}
		}
	}
`

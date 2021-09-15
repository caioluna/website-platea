import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Loading = styled.p`
	color: white;
	font-size: 36px;
`

export const Container = styled(motion.main)`
	position: relative;
	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: flex-start;
	justify-content: center;

	/* overflow: hidden; */
	color: #fff;
`

export const Content = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	height: 100vh;
	width: 1040px;
	max-width: 100vw;

	.title-wrapper {
		position: absolute;
		display: flex;
		width: 300px;
		height: 50px;
		transform: rotate(-90deg);

		top: 170px;
		left: -200px;

		h1 {
			font-size: 64px;
			line-height: 40px;
			text-align: center;
			font-family: 'DINAlternateBlack', sans-serif;
			color: #fddb00;
		}
	}

	@media (max-width: 460px) {
		.title-wrapper {
			top: 20px;
			left: 20px;
			transform: none;

			h1 {
				position: static;
				font-size: 32px;
			}
		}
	}
`

export const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 60px;

	width: 100%;
	height: 50px;

	label {
		position: relative;
		height: 40px;

		input {
			width: 400px;
			height: inherit;
			border-radius: 3px;

			background-color: #212121;
			border: 1px solid #fddb00;
			color: #fff;
			padding: 12px 20px;

			&::placeholder {
				color: #b0b0b0;
			}
		}
	}

	@media (max-width: 460px) {
		width: 95%;

		margin-top: 120px;
		justify-content: center;

		label {
			width: 95%;

			input {
				width: 100%;
			}
		}
	}
`

export const PhotoContainer = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	height: 500px;
	margin-top: 60px;

	.item {
		position: relative;
		width: 250px;
		height: 250px;
		border-radius: 3px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;

		img {
			position: absolute;
			width: 100%;
		}

		.hover-container {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		.description {
			position: absolute;
			left: 0;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;

			width: 250px;
			height: 100px;
			padding: 15px 20px;

			border-radius: 3px;
			background-color: #fddb00;
			color: #212121;

			z-index: 999;

			h4 {
				position: absolute;
				top: 0;
				left: 0;

				display: flex;
				justify-content: center;
				align-items: center;

				width: 100%;
				height: 40px;
				padding: 8px;

				font-weight: 400;
				font-size: 14px;
				line-height: 28px;

				color: #fff;
				background-color: #212121;
			}

			.hashtag {
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;

				width: 100%;
				height: 60px;
				padding: 8px;

				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				gap: 5px;

				.hash {
					background-color: #212121;
					color: #fff;
					font-size: 10px;
					padding: 2px 6px;
					border-radius: 2px;

					> .hash {
						margin-right: 8px;
					}
				}
			}
		}
	}

	@media (max-width: 460px) {
		justify-content: center;
		gap: 20px;

		.item {
			width: 20rem;
			height: 20rem;

			.description {
				width: 100%;
			}
		}
	}
`

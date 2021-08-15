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

	overflow: hidden;
	color: #fff;
`

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	height: 100vh;
	width: 1040px;

	.title-wrapper {
		position: absolute;
		width: 1040px;

		h1 {
			position: absolute;
			left: -150px;
			top: 260px;
			font-size: 64px;
			line-height: 40px;
			text-align: center;
			font-family: 'DINAlternateBlack', sans-serif;
			color: #fddb00;
			transform: rotate(-90deg);
		}
	}

	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;

		margin-top: 40px;

		li {
			list-style: none;
			min-width: 30px;
			min-height: 30px;

			display: grid;
			place-items: center;

			+ li {
				margin-left: 6px;
			}

			a {
				display: flex;
				align-items: center;
				justify-content: center;

				cursor: pointer;
				min-width: 30px;
				min-height: 30px;
				padding: 6px 12px;
				transition: color 0.3s ease-in-out;
			}

			&:hover {
				color: #fddb00;
				transition: color 0.3s ease-in-out;

				path {
					fill: #fff;
				}
			}
		}

		.previous {
			transform: rotate(180deg);
		}

		.active-page {
			background-color: #212121;
			border: 2px solid #fddb00;
			color: #fddb00;
			font-weight: 700;
			border-radius: 3px;
		}

		.disabled-page {
			path {
				fill: #212121;
				stroke: rgba(255, 255, 255, 0.5);
				stroke-width: 2px;
			}
			&:hover {
				a {
					cursor: default;
				}
				path {
					fill: #212121;
					stroke: rgba(255, 255, 255, 0.5);
					stroke-width: 2px;
				}
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
`

export const PhotoContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	height: 500px;
	margin-top: 60px;

	.item {
		width: 250px;
		height: 250px;
		border-radius: 3px;
		overflow: hidden;

		&:hover .description {
			display: flex;
		}

		img {
			height: 100%;
		}

		.description {
			position: absolute;
			display: none;
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
					color: #fddb00;
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
`

import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.main)`
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100vw;
	height: 100vh;

	overflow: hidden;
	color: #fff;

	h1 {
		position: absolute;
		left: 0;
		top: 260px;
		font-size: 64px;
		line-height: 40px;
		text-align: center;
		font-family: 'DINAlternateBlack';
		color: #fddb00;
		transform: rotate(-90deg);
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

export const Content = styled.section`
	/* display: flex; */
	/* justify-content: center; */
	/* align-items: center; */
	margin-top: 90px;
	height: 100vh;
	width: 1040px;
	background-color: blueviolet;
`

export const PhotoSlider = styled.div`
	position: relative;
	max-width: 450px;
	margin: 0 auto;
	background-color: yellow;

	/* display: flex; */
	/* justify-content: center; */

	&::after {
		position: absolute;
		content: '';
		display: block;
		width: 100%;
		height: 450px;
		outline: 5px solid #fddb00;
		top: 0;
		left: 0;
	}

	.photo-slider-wrapper {
		position: absolute;
		display: flex;
	}
`

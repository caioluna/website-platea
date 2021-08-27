import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ContactBox = styled(motion.div)`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	margin: auto;

	display: grid;
	grid-template-columns: 1fr 2fr;

	width: 1040px;
	height: 695px;

	background-color: #212121;
	border-radius: 6px;

	overflow: hidden;

	.left-side {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 415px;
		height: 100%;
		background-color: #fddb00;

		svg {
			height: 550px;
		}
	}

	.right-side {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;

		.close {
			position: absolute;
			top: 20px;
			right: 20px;

			background-color: transparent;
			cursor: pointer;
		}

		.form-area {
			width: 350px;

			h1 {
				font-family: 'DINAlternateBlack';
				font-size: 64px;
				color: #fddb00;
			}

			p {
				font-size: 16px;
				line-height: 24px;

				margin: 20px auto 40px;
			}
		}

		form {
			display: flex;
			justify-content: center;
			flex-direction: column;

			input {
				height: 35px;
			}

			input,
			textarea {
				width: 100%;
				padding: 8px 40px;

				font-size: 14px;
				font-family: 'Poppins', sans-serif;

				background-color: rgba(255, 255, 255, 0.2);
				color: #fff;
				border-radius: 3px;
				resize: none;

				&::placeholder {
					color: #aeaeae;
				}
			}

			label {
				position: relative;
				margin-bottom: 18px;

				.icon svg {
					position: absolute;
					top: 8px;
					left: 10px;
					margin: auto;

					width: 20px;
					height: 20px;
				}
			}

			button {
				height: 35px;
				width: 100%;

				border-radius: 3px;
				font-size: 14px;
				font-family: 'Poppins', sans-serif;

				background-color: #fddb00;
				color: #212121;

				cursor: pointer;
			}
		}

		.or {
			display: flex;
			justify-content: center;
			align-items: center;

			hr {
				height: 1px;
				width: 40px;
				background-color: #fff;
			}

			span {
				margin: 26px 15px 18px;
			}
		}

		.call {
			text-align: center;

			h2 {
				font-size: 18px;
				line-height: 20px;
				margin-bottom: 8px;
			}

			a {
				text-decoration: none;
				color: #fff;
				font-family: 'Poppins', sans-serif;
				font-size: 18px;
			}
		}
	}
`

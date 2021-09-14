import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
	display: flex;
	color: #fff;
	height: 100%;
	user-select: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	.box {
		position: relative;
		width: 200px;
		height: 200px;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 30px;

		border: 2px solid rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		background-color: #2c2c2c;

		h4,
		img {
			opacity: 0.2;
			pointer-events: none;
			user-select: none;
		}

		h4 {
			margin-top: 45px;
			font-family: 'DINAlternateBlack';
			font-size: 22px;
			line-height: 24px;
		}

		img {
			height: 45px;
		}

		span {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 20px 25px;

			bottom: 0px;

			width: 200px;
			height: 80px;

			background-color: #fff;
			border: 2px solid #fff;
			border-radius: 0 0 8px 8px;
			color: #212121;

			font-size: 12px;
			line-height: 16px;
			text-align: center;
		}

		@media (max-width: 460px) {
			margin-bottom: 20px;
		}
	}
`

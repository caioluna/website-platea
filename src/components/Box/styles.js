import styled from 'styled-components'

export const BoxItem = styled.div`
	display: flex;
	justify-content: space-between;
	color: #fff;

	.box {
		position: relative;
		width: 200px;
		height: 200px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;

		border: 2px solid rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		background-color: #2c2c2c;

		&:hover {
			background-color: #202020;
			border-color: #fff;
			transition: all 0.3s ease-in-out;

			> h4,
			img {
				opacity: 100%;
			}
		}

		h4,
		img {
			opacity: 20%;
			pointer-events: none;
		}

		h4 {
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

			width: 200px;
			height: 80px;

			background-color: #fff;
			border: 2px solid #fff;
			border-radius: 8px;
			color: #212121;

			font-size: 12px;
			line-height: 16px;
			text-align: center;
			z-index: -1;

			transition: all 0.2s ease-in-out;
		}
	}

	.show {
		transform: translateY(150px);
	}
	.hide {
		transform: translateY(0);
	}
`

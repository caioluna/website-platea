import styled from 'styled-components'

export const Container = styled.section`
	position: relative;
	width: 100vw;
	/* height: 700px; */

	display: flex;
	justify-content: center;
	align-items: center;
	padding: 100px 0 200px;

	.geo-background {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: -1;
	}
`

export const Content = styled.div`
	width: 1040px;
	display: flex;
	flex-direction: column;

	h1 {
		font-size: 36px;
		line-height: 40px;
		color: #fddb00;
		font-family: 'DINAlternateBlack';
		margin-bottom: 100px;
	}
`

export const Boxes = styled.div`
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
		background-color: #355264;

		&:hover {
			background-color: #5d7583;

			> h4,
			img {
				opacity: 100%;
			}
		}

		h4,
		img {
			opacity: 20%;
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
			bottom: 20px;
			padding: 20px 25px;

			width: 200px;

			background-color: #1c3c50;
			border: 2px solid #1c3c50;
			border-radius: 0 0 8px 8px;

			font-size: 12px;
			line-height: 16px;
			text-align: center;
			z-index: -1;
		}
	}
`

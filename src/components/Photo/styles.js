import styled from 'styled-components'

export const PhotoItem = styled.div`
	min-width: 450px;
	flex: 1;
	border-radius: 3px;
	/* overflow: hidden; */

	/* &:hover .description {
			display: flex;
		} */

	img {
		width: 450px;
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
`

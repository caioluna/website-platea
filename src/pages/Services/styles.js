import styled from 'styled-components'

export const Container = styled.section`
	position: relative;
	width: 100vw;

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
		font-size: 64px;
		line-height: 40px;
		color: #fddb00;
		font-family: 'DINAlternateBlack';
		margin-bottom: 145px;
	}

	.box-wrapper {
		display: grid;
		justify-items: center;

		grid-template-columns: repeat(4, 1fr);
	}
`

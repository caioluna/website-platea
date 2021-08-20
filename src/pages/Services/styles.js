import styled from 'styled-components'

export const Container = styled.section`
	position: relative;
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
	padding: 100px 0 200px;

	overflow: hidden;
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
		display: flex;
		justify-content: space-between;
		align-items: center;

		grid-template-columns: repeat(4, 1fr);
	}
`

import styled, { keyframes } from 'styled-components'

export const Container = styled.section`
	display: flex;
	justify-content: center;

	width: 100vw;
	margin: 100px 0 100px;
`

export const Content = styled.div`
	display: flex;
	width: 1040px;
`

const fadeIn = keyframes`
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`

export const Section = styled.section`
	display: flex;
	/* position: relative; */
	margin-top: 80px;
	margin: 100px 30px;
	border-radius: 8px;

	h1 {
		font-size: 36px;
		line-height: 40px;
		color: #fddb00;
		font-family: 'DINAlternateBlack';
		margin-bottom: 50px;

		opacity: 0;
		transform: translateY(100px);
		transition: all 0.4s;
		animation: ${fadeIn} 1s ease 300ms forwards;
	}

	p {
		font-size: 16px;
		line-height: 30px;
		color: #fff;

		+ p {
			margin-top: 30px;
		}

		&:first-of-type {
			width: 560px;
		}

		&:last-of-type {
			width: 660px;
		}
	}
`

// export const TriForms = styled.div`
//   position: relative;
//   height: 100%;

//   .tri-form {
//     width: 150px;
//     height: 150px;

//     position: absolute;
//     right: -200px;

//     &:nth-of-type(2) {
//       right: -250px;
//       top: 70px;
//       z-index: -1;
//     }

//     &:nth-of-type(3) {
//       right: -315px;
//       top: 170px;
//       z-index: -2;
//     }
//   }
// `

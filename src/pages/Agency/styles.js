import styled, { keyframes } from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: center;

  width: 100vw;
  margin: 100px 0 100px;

  .form-wrapper {
    position: absolute;
    right: 230px;
    bottom: 0;

    .tri-form {
      position: absolute;
      right: 0;
      top: -100;

      &:nth-of-type(2) {
        right: -85px;
        top: 135px;
        z-index: -1;
      }

      &:nth-of-type(3) {
        right: -120px;
        top: 330px;
        z-index: -2;
      }
    }
  }
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

export const About = styled.div`
  position: relative;
  margin-top: 80px;
  margin: 100px 30px;
  border-radius: 8px;

  h1 {
    font-size: 36px;
    line-height: 40px;
    color: #FDDB00;
    font-family: 'DINAlternateBlack';
    margin-bottom: 50px;

    opacity: 0;
    transform: translateY(100px);
    transition: all .4s;
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
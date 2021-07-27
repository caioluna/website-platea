import styled from 'styled-components'
import instagramIcon from '../../assets/insta-icon.svg'

export const Container = styled.footer`
  position: absolute;
  /* bottom: 0; */
  
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  height: 280px;
  width: 100vw;
  
  overflow: hidden;
  background-color: #FDDB00;
  color: #355264;

  .background-circles {
    position: absolute;
    width: 100vw;
    height: 100%;

    .circle {
      position: absolute;
      border-radius: 999px;
      background-color: #fff;

      &:nth-of-type(1) {
        top: 80px;
        left: 80px;
        width: 75px;
        height: 75px;
        opacity: 30%;
      }

      &:nth-of-type(2) {
        top: 230px;
        left: 100px;
        width: 285px;
        height: 285px;
        opacity: 20%;    
      }

      &:nth-of-type(3) {
        top: 120px;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 215px;
        height: 215px;
        opacity: 20%;      
      }

      &:nth-of-type(4) {
        top: 20px;
        right: 110px;
        width: 150px;
        height: 150px;
        opacity: 15%;    
      }

      &:nth-of-type(5) {
        right: 75px;
        bottom: -50px;
        width: 80px;
        height: 80px;
        opacity: 30%;    
      }

    }
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  width: 1040px;

  padding: 50px 0;

  z-index: 1;
`

export const Logo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;


  img {
    height: 32px;
    fill: #355264;
  }

  p {
    font-size: 14px;
    line-height: 20px;
  }

  .instagram-icon {
    width: 30px;
    height: 30px;
    display: block;
    background: url(${instagramIcon}) center/contain no-repeat;
  }
`

export const Links = styled.div`
  display: flex;
  gap: 50px;

  h3 {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;

    li {

      + li {
        margin-top: 20px;
      }

      a {
        color: #355264;
      }
    }
  }
`

export const Address = styled.div`
  text-align: right;

  .location {
    margin-bottom: 100px;
  }
`
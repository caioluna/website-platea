import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.main)`
  position: relative;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100vw;
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 1040px;
  height: 100vh;

  .hero {
    display: flex;
    justify-content: center;
    align-items: center;

    .geoform {
      position: absolute;
      z-index: -999;
      opacity: .05;

      transition: all ease-out .2s;
    }

    .geo-white {
      top: -80px;
      left: 0;

      animation: swingLeft 10s infinite ;
    }
    
    .geo-yellow {
      top: -80px;
      right: 0;

      animation: swingRight 10s infinite ;
    }
    
    .hero-wrapper {
      position: relative;
      /* height: 100vh;
      width: 100vw; */

      display: flex;
      justify-content: center;
      align-items: center;

      .hero-forms {
        position: absolute;
        width: 200px;
        height: 10px;
        opacity: 0;
  
        background: #fff;

        transition: all .3s;
        
        &:nth-of-type(1) {
          transform: rotate(-105deg) translateX(-200px) translateY(400px);
          animation: turn1 1s ease .5s forwards;
        }
        
        &:nth-of-type(2) {
          transform: rotate(-61deg) translateX(-40px) translateY(420px);
          animation: turn2 1s ease .7s forwards;
        }
        &:nth-of-type(3) {
          transform: rotate(-7deg) translateX(140px) translateY(300px);
          animation: turn3 1s ease .9s forwards;
        }
      }

      .hero-logo {
        transform: translateY(150px);
        opacity: 0;
        animation: fadeIn 1s ease 300ms forwards;
      }
    }
  }

  @keyframes swingLeft {
    0% {
      transform: translateX(0px);
    }
    
    50% {
      transform: translateX(-15px);
    }

    100% {
      transform: translateX(0px);
    }
  }

  @keyframes swingRight {
    0% {
      transform: translateX(0px);
    }
    
    50% {
      transform: translateX(15px);
    }

    100% {
      transform: translateX(0px);
    }
  }

  @keyframes turn1 {
    to {
      transform: rotate(-115deg) translateX(-200px) translateY(400px);
      opacity: .5;
      background: #1C3C50;
    }
  }

  @keyframes turn2 {
    to {
      transform: rotate(-71deg) translateX(-40px) translateY(420px);
      opacity: .5;
      background: #1C3C50;
    }
  }

  @keyframes turn3 {
    to {
      transform: rotate(-17deg) translateX(140px) translateY(300px);
      opacity: .5;
      background: #1C3C50;
    }
  }

  @keyframes fadeIn {
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`
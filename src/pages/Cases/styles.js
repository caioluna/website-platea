import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.main)`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  min-height: 100vh;
  width: 100vw;
  padding: 100px 0;
  background-color: #FFF;
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 1040px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;

  h1 {
    font-size: 36px;
    line-height: 40px;
    text-align: center;
    font-family: 'DINAlternateBlack';
    color: #355264;
  }

  form {
    width: 400px;
    label {
      position: relative;
      height: 40px;

      input {
        width: 318px;
        height: inherit;
        border-radius: 6px 0 0 6px;
  
        background-color: #355264;
        color: #fff;
        padding: 12px 20px;
        
        &::placeholder {
          color: #fff;
        }
      }
  
      button {  
        width: 80px;
        height: inherit;
  
        border-radius: 0 6px 6px 0;
        background-color: #1C3C50;
        color: #fff;
      }
    }
    
  }
`

export const Jobs = styled.div`  
  margin-top: 100px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;

  .item {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 250px;
    height: 250px;
    border-radius: 8px;
    overflow: hidden;

    img {
      border: 1px dashed slateblue;
      width: 100%;
      height: 100%;
    }

    .description {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      width: 250px;
      height: 100px;
      padding: 15px 20px;

      border-radius: 8px;
      background-color: #355264;
      color: #fff;

      h4 {
        /* font-family: Poppins; */
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 15px;
      }

      .hashtag {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 5px;


        span {
          background-color: #fff;
          color: #2f2f2f;
          font-size: 12px;
          padding: 2px 6px;
          border-radius: 3px;
        }
      }

    }
  }
`
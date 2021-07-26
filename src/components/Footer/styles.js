import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 500px;
  width: 100vw;

  color: #fff;
  
  & .whiteLine {
    position: absolute;
    width: 100%;
    height: 4px;
    top: 15px;
    background-color: #fff;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  width: 1200px;
  height: 100%;

  padding: 100px 0 30px;

  .copy {
    font-size: 14px;
    display: block;
    margin: 0 auto;
  }
`

export const MenuTree = styled.div`
  display: flex;

  div {
    + div {
      margin-left: 70px;
    }
  }

  h3 {
    margin-bottom: 40px;
    font-size: 24px;
    color: #FDDB00;
  }

  ul {
    list-style-type: none;

    li {
      
      +li {
        margin-top: 24px;
      }
      
      a {
        color: #fff;
      }
    }
  }
`

export const UpperWrap = styled.div`
  display: flex;
  justify-content: space-between;

  .logo {
    text-align: right;
    
    img {
      width: 200px;
    }
    
    p {
      width: 230px;
      margin-top: 25px;
      text-align: right;
      line-height: 28px;
    }
  }
`
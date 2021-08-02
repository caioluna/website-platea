import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 40px;
  z-index: 9999;
`
export const Content = styled.div`
  max-width: 1040px;
  width: 1040px;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: flex;
      cursor: pointer;
      z-index: 999;
    }
  }
`

export const Nav = styled.nav`
  position: absolute;

  ul {
    display: flex;
    list-style: none;

    .left, .right {
      overflow: hidden;
      width: 200px;
    }

    .left {
      display: flex;
      justify-content: flex-end;
      
      li {
        transform: translateX(180px);
      }

      &.open > li {
        transform: translateX(-45px);
      }
    }
    
    .right {
      display: flex;
      justify-content: flex-start;
      
      li {
        transform: translateX(-180px);
      }

      &.open > li {        
        transform: translateX(45px);
      }
    }

    li {
      padding: 2px 11px;

      a {
        color: #FFF;

        &:active {
          color: #FDDB00;
        }
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
      }

      + li {
        margin-left: 20px;
      }
    }
  }
`
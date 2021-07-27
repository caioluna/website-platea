import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60px;
  z-index: 9999;
  background-color: #1C3C50;
`
export const Content = styled.div`
  max-width: 1040px;
  width: 1040px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;

    a {
      display: flex;
      
      img {
        height: 30px;
      }
    }
  }
`

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li {
      padding: 2px 11px;

      a {
        color: #FFF;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
      }

      + li {
        margin-left: 28px;
      }
    }
  }
`
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 80px;
`
export const Content = styled.div`
  max-width: 1040px;
  width: 1040px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
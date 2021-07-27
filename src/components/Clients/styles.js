import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  
  background-color: #fff;

  width: 100vw;
  padding: 100px 0;
`

export const Content = styled.div`
  width: 1040px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;  
`

export const Slider = styled.div`
  max-width: 1030px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 36px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 50px;
    font-family: 'DINAlternateBlack';
    color: #355264;
  }

  .slider-rows {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 100px;
  }

  .upper-row, .lower-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* place-items: center; */
    gap: 70px;

    .placeholder {
      width: 150px;
      height: 150px;
      background-color: steelblue;
    }
  }

`


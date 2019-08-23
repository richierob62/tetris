// BG Image
import bgImage from '../../img/bg.png'
import styled from 'styled-components'

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const StyledTetris = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  margin-top: 70px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`

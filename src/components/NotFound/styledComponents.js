import styled from 'styled-components'

export const HomeContainer = styled.div``

export const BodySection = styled.div`
  display: flex;
`
export const SidebarContainer = styled.div`
  width: 20%;
`
export const ContentSection = styled.div`
  width: 80%;
  height: 100vh;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 320px;
  width: 420px;
`
export const NotFoundContainer = styled.div``

export const NotFoundHeading = styled.h1`
  color: ${props => props.color};
  margin-top: 30px;
`
export const NotFoundText = styled.p`
  font-size: 16px;
  margin-top: 20px;
  color: ${props => props.color};
`

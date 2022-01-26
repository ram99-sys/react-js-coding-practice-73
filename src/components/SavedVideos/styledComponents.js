import {RiPlayListAddLine} from 'react-icons/ri'
import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  min-height: 100vh;
`

export const BodySection = styled.div`
  display: flex;
`
export const SidebarContainer = styled.div`
  width: 20%;
`
export const BodyContainer = styled.div`
  width: 80%;
`

export const SavedVideosListContainer = styled.ul`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.bgColor};
`

export const Image = styled.img`
  height: 320px;
  width: 420px;
`

export const NoSavedVideosHeading = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-top: 50px;
  color: ${props => props.color};
`
export const NoSavedVideosText = styled.p`
  font-size: 20px;
  margin-top: 18px;
  color: ${props => props.color};
`
export const HeaderContainer = styled.div`
  background: ${props => props.bgColor};
  padding: 20px;
  display: flex;
  align-items: center;
`

export const Icon = styled(RiPlayListAddLine)``

export const IconContainer = styled.div`
  background: ${props => props.bgColor};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`
export const SavedVideosHeading = styled.h1`
  font-size: 24px;
  color: ${props => props.color};
`
export const SavedVideosView = styled.div``

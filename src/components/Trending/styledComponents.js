import {HiFire} from 'react-icons/hi'
import styled from 'styled-components'

export const HomeContainer = styled.div`
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
export const HeaderContainer = styled.div`
  background: ${props => props.bgColor};
  padding: 20px;
  display: flex;
  align-items: center;
`

export const Icon = styled(HiFire)``

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
export const TrendingHeading = styled.h1`
  font-size: 24px;
  color: ${props => props.color};
`
export const DataContainer = styled.div``

export const TendingApiListContainer = styled.ul`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`

export const FailureViewImage = styled.img`
  height: 250px;
  width: 300px;
  margin-top: 30px;
`

export const FailureViewHeading = styled.h1`
  font-size: 24px;
  margin-top: 20px;
  color: ${props => props.color};
`

export const FailureViewText = styled.p`
  font-size: 18px;
  margin-top: 20px;
  color: ${props => props.color};
`

export const FailureViewRetryButton = styled.button`
  margin-top: 20px;
  background-color: #00306e;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 8px 15px;
`

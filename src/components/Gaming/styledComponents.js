import styled from 'styled-components'
import {RiHeartPulseFill} from 'react-icons/ri'

export const HomeContainer = styled.div`
  min-height: 100vh;
`

export const BodySection = styled.div`
  display: flex;
`
export const SidebarContainer = styled.div`
  width: 20%;
`
export const DataContainer = styled.div``

export const GamingApiListContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: 40px;
`

export const HeaderContainer = styled.div`
  background: #f1f5f9;
  padding: 20px;
  display: flex;
  align-items: center;
`

export const Icon = styled(RiHeartPulseFill)``

export const IconContainer = styled.div`
  background: #ebebeb;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`
export const GamingHeading = styled.h1`
  font-size: 24px;
`
export const BodyContainer = styled.div`
  width: 80%;
`

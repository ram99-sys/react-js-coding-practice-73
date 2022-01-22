import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {RiHeartPulseFill, RiPlayListAddLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: ${props => props.bgColor};
`

export const LinksSection = styled.ul`
  list-style-type: none;
  padding-inline-start: 0px;
`

export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 20px;
`

export const LinkText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.color};
  font-family: 'Roboto';
  font-weight: ${props => props.fontWeight};
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 10px;
  padding-left: 20px;
  &:hover {
    background-color: ${props => props.bgColor};
  }
`
export const LinkItem = styled.li`
  background-color: '#00306e';
`

export const HomeIcon = styled(AiFillHome)`
  margin-right: 15px;
  color: ${props => props.color};
`

export const TrendingIcon = styled(HiFire)`
  margin-right: 15px;
  color: ${props => props.color};
`

export const GamingIcon = styled(RiHeartPulseFill)`
  margin-right: 15px;
  color: ${props => props.color};
`
export const SavedVideosIcon = styled(RiPlayListAddLine)`
  margin-right: 15px;
  color: ${props => props.color};
`
export const Heading = styled.h1`
  font-size: 20px;
  margin-bottom: 30px;
  color: ${props => props.color};
`
export const FooterIcons = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 20px;
  margin-bottom: 20px;
`
export const IconsSection = styled.div``

export const FooterText = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: ${props => props.color};
`
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 10px;
  padding-left: 20px;
  background-color: ${props => props.bgColor};
  cursor: pointer;
`

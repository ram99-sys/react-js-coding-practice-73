import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const TrendingSectionListItems = styled.li`
  padding: 40px;
  display: flex;
`

export const Image = styled.img`
  height: 250px;
  width: 420px;
  margin-right: 20px;
`
export const ContentSection = styled.div`
  margin-top: 10px;
`

export const Heading = styled.p`
  font-size: 24px;
  margin-top: 10px;
  color: ${props => props.color};
`
export const ChannelName = styled.p`
  margin-top: 10px;
  color: ${props => props.color};
`

export const ViewsAndPublishedDate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`
export const NoOfViews = styled.p`
  font-size: 12px;
  margin-right: 8px;
  color: ${props => props.color};
`
export const PublishedDate = styled.p`
  font-size: 12px;
  color: ${props => props.color};
`
export const DotContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Dot = styled.p`
  font-size: 30px;
  margin-top: -18px;
  margin-right: 2px;
  color: ${props => props.color};
`
export const NavLink = styled(Link)`
  text-decoration: none;
`

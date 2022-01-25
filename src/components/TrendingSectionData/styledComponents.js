import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const TrendingSectionListItems = styled.div`
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

export const Heading = styled.h1`
  font-size: 24px;
  margin-top: 10px;
`
export const ChannelName = styled.p`
  margin-top: 10px;
`

export const ViewsAndPublishedDate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`
export const NoOfViews = styled.p`
  font-size: 12px;
  color: #7e858e;
  margin-right: 8px;
`
export const PublishedDate = styled.p`
  font-size: 12px;
  color: #7e858e;
`
export const DotContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Dot = styled.p`
  font-size: 30px;
  margin-top: -15px;
  margin-right: 2px;
  color: #7e858e;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`

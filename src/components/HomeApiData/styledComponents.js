import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItem = styled.li`
  padding-right: 15px;
  padding-bottom: 50px;
`

export const Image = styled.img`
  height: 160px;
  width: 240px;
`
export const ContentContainer = styled.div`
  display: flex;
  margin-left: 5px;
  margin-top: 5px;
`

export const ThumbNail = styled.img`
  height: 30px;
  with: 30px;
  margin-right: 10px;
`
export const ChannelContentContainer = styled.div``

export const Content = styled.p`
  width: 190px;
  font-size: 14px;
  color: ${props => props.color};
`
export const Name = styled.p`
  font-size: 14px;
  color: #7e858e;
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
  color: #181818;
`

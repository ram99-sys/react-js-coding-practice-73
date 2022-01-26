import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GamingVideosItem = styled.li`
  margin-right: 20px;
  margin-bottom: 60px;
`

export const Image = styled.img`
  height: 400px;
  width: 230px;
`
export const Title = styled.p`
  margin-top: 5px;
  color: ${props => props.color};
  font-weight: 400;
  font-size: 16px;
`

export const ViewCount = styled.p`
  margin-top: 5px;
  color: ${props => props.color};
  font-weight: 400;
  font-size: 16px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

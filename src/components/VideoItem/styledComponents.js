import styled from 'styled-components'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'

export const VideoContainer = styled.div`
  height: 500px;
  width: 100%;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 20px;
`
export const VideoItemContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
`
export const VideoText = styled.p`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 16px;
  color: ${props => props.color};
`

export const ViewsAndPublishedDate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding-left: 20px;
`
export const NoOfViews = styled.p`
  font-size: 14px;
  color: ${props => props.color};
  margin-right: 8px;
`
export const PublishedDate = styled.p`
  font-size: 14px;
  color: ${props => props.color};
`
export const DotContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Dot = styled.p`
  font-size: 30px;
  margin-top: -15px;
  margin-right: 2px;
  color: ${props => props.color};
`

export const ViewsAndLikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
`

export const LikeAndDislikeContainer = styled.div`
  display: flex;
`

export const DislikeIcon = styled(AiOutlineDislike)`
  margin-right: 5px;
`

export const LikeText = styled.p`
  font-weight: 500;
  color: ${props => props.color};
  font-size: 14px;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`
export const LikeIcon = styled(AiOutlineLike)`
  margin-right: 5px;
  color: ${props => props.color};
`
export const SaveIcon = styled(CgPlayListAdd)`
  margin-right: 5px;
  color: ${props => props.color};
`
export const Line = styled.hr`
  margin: 0px;
  background-color: ${props => props.bgColor};
  margin-left: 20px;
  margin-right: 20px;
  padding: 0px;
`
export const ProfileAndSubscribers = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 15px;
`
export const SubscribersAndTitleContainer = styled.div``

export const Name = styled.p`
  color: ${props => props.color};
`

export const SubscribersCount = styled.p`
  font-size: 14px;
  color: ${props => props.color};
`
export const DescriptionText = styled.p`
  margin-top: 25px;
  margin-left: 80px;
  padding-bottom: 50px;
  color: ${props => props.color};
`

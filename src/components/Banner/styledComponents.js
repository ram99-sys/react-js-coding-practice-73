import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: contain;
  width: 100%;
  background-repeat: no-repeat;
  padding: 30px;
`

export const Image = styled.img`
  height: 40px;
  width: 150px;
`
export const LogoAndCloseContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BannerHeading = styled.h1`
  font-size: 20px;
  width: 40%;
  color: #313131;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 30px;
`

export const BannerButton = styled.button`
  background-color: transparent;
  padding: 8px 20px;
  border: 1px solid #606060;
  border-radius: 5px;
  color: #4f46e5;
  font-weight: 500;
`
export const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`

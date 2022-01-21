import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: contain;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
`

export const Image = styled.img`
  height: 40px;
  width: 150px;
`
export const ImageContainer = styled.div``

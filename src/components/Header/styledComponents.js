import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  padding: 15px 50px;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const Image = styled.img`
  height: 30px;
  width: 100px;
`
export const RightContainer = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
`
export const LogoutButton = styled.button`
  padding: 5px 15px;
  cursor: pointer;
  background-color: transparent;
  font-weight: 500;
  border: 2px solid ${props => props.border};
  border-radius: 5px;
  color: ${props => props.color};
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.color};
  cursor: pointer;
`

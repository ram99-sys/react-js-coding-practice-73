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
  margin-right: 20px;
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
  margin-right: 20px;
`
export const PopupContainer = styled.div`
  background-color: #231f20;
  border-radius: 10px;
  padding: 30px;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border-radius: 5px;
  color: #ffffff;
  border: 2px solid #00306e;
  padding: 5px 14px;
  margin-right: 20px;
  cursor: pointer;
`

export const Text = styled.p`
  color: #ffffff;
  margin-bottom: 15px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border-radius: 5px;
  color: #ffffff;
  border: 2px solid #ffffff;
  padding: 5px 14px;
  margin-right: 20px;
  cursor: pointer;
`

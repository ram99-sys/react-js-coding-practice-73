import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
`
export const LoginForm = styled.form`
  height: 25%;
  width: 30%;
  background-color: ${props => props.bgColor};
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 5px #f9f9f9;
`
export const Image = styled.img`
  height: 45px;
  width: 200px;
  margin-bottom: 40px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const Label = styled.label`
  color: ${props => props.color};
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
  text-align: left;
`

export const Input = styled.input`
  border: 1px solid #e2e8f0;
  outline: none;
  padding: 10px;
  color: ${props => props.color};
  font-weight: 500;
  font-size: 16px;
  border-radius: 5px;
  background-color: transparent;
`
export const CheckBoxInput = styled.input`
  margin-right: 10px;
  height: 15px;
  width: 15px;
`

export const CheckboxLabel = styled.label`
  color: ${props => props.color};
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
export const LoginButton = styled.button`
  width: 100%;
  background-color: #4f46e5;
  color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-weight: 500;
  font-size: 16px;
`
export const Errortext = styled.p`
  color: #ff0000;
  font-size: 14px;
  text-align: left;
`

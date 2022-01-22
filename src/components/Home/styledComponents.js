import styled from 'styled-components'

export const HomeContainer = styled.div``

export const BodySection = styled.div`
  display: flex;
`
export const SidebarContainer = styled.div`
  width: 20%;
`
export const ContentSection = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`

export const BodyContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 60vh;
  padding: 20px;
`
export const SearchBarContainer = styled.div`
  border: 2px solid ${props => props.border};
  width: 370px;
  display: flex;
`

export const SearchInput = styled.input`
  background: ${props => props.bgColor};
  width: 300px;
  padding: 5px;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`

export const SearchButton = styled.button`
  background: ${props => props.bgColor};
  margin: 0px;
  width: 82px;
  border: none;
  padding-left: 20px;
  padding-top: 3px;
  cursor: pointer;
  border-left: 2px solid ${props => props.border};
`

export const ApiData = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-left: 0px;
  padding-inline-start: 0px;
`
export const LoaderContainer = styled.div`
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export const NoResultsImage = styled.img`
  height: 300px;
  width: 400px;
`

export const ResultsNotFoundHeading = styled.h1`
  font-size: 24px;
  margin-top: 30px;
  color: ${props => props.color};
`

export const Message = styled.p`
  font-size: 18px;
  margin-top: 20px;
  color: ${props => props.color};
`
export const RetryButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #00306e;
  padding: 8px 15px;
  cursor: pointer;
  color: #ffffff;
  margin-top: 20px;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export const FailureViewImage = styled.img`
  height: 400px;
  width: 500px;
  margin-top: 30px;
`

export const FailureViewHeading = styled.h1`
  font-size: 24px;
  margin-top: 20px;
  color: ${props => props.color};
`

export const FailureViewText = styled.p`
  font-size: 18px;
  margin-top: 20px;
  color: ${props => props.color};
`

export const FailureViewRetryButton = styled.button`
  margin-top: 20px;
  background-color: #00306e;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 8px 15px;
`

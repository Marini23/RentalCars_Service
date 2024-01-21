import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  width: 79px;
  height: 24px;
  margin: 20px auto;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid ${props => `${props.theme.colors.blue}`};
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${props => `${props.theme.colors.blue}`};
  &:hover {
    border-bottom: 1px solid ${props => `${props.theme.colors.activeBlue}`};
    color: ${props => `${props.theme.colors.activeBlue}`};
  }
`;

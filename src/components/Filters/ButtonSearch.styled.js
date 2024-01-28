import styled from 'styled-components';

export const ButtonSearch = styled.button`
  width: 136px;
  height: 48px;
  cursor: pointer;
  border-radius: 12px;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: ${props => `${props.theme.colors.blue}`};
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  color: ${props => `${props.theme.colors.white}`};
  &:hover {
    background-color: ${props => `${props.theme.colors.activeBlue}`};
  }
  &:focus {
    background-color: ${props => `${props.theme.colors.activeBlue}`};
  }
`;

import styled from 'styled-components';

export const Header = styled.nav`
  display: flex;
  height: 40px;
  gap: 20px;
  align-items: center;
  background-color: ${props => `${props.theme.colors.backgroundHeder}`};
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: ${props => `${props.theme.colors.textHeder}`};
`;

export const Text = styled.h3`
  padding: 0 30px;
  color: ${props => `${props.theme.colors.textHeder}`};
`;

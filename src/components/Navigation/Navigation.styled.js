import styled from 'styled-components';

export const Header = styled.nav`
  position: fixed;
  z-index: 1;
  display: flex;
  width: 1440px;
  height: 40px;
  margin: 0 auto;
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

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.nav`
  position: fixed;
  z-index: 1;
  display: flex;
  width: 100%;
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

export const activeLinkStyles = {
  borderBottom: `1px solid ${props => `${props.theme.colors.activeBlue}`}`,
  color: `${props => `${props.theme.colors.activeBlue}`}`,
};

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  padding: 0 30px;
  color: ${props => `${props.theme.colors.textHeder}`};
  &.active {
    color: ${props => `${props.theme.colors.activeBlue}`};
  }
`;

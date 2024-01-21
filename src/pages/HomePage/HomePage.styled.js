import styled from 'styled-components';

import Bg from './bg.jpg';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: url(${Bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Descriprion = styled.p`
  position: absolute;
  top: 235px;
  left: 200px;
  display: flex;
  width: 400px;
  height: 200px;
  color: ${props => `${props.theme.colors.textHomePage}`};
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

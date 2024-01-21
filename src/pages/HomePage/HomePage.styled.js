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

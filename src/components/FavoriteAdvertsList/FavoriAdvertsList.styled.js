import styled from 'styled-components';

export const FavoritesContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  top: 60px;
`;

export const CarsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 10px 0;
  width: 1184px;
  gap: 40px 29px;
`;

export const EmptyFavoritesMessage = styled.p`
  display: flex;
  font-size: 48px;
  justify-content: center;
`;

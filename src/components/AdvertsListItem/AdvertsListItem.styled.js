import styled from 'styled-components';

export const AdvertCard = styled.li`
  position: relative;
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 28px;
`;

export const TitleContainer = styled.div`
  display: flex;
  height: 24px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${props => `${props.theme.colors.black}`};
`;

export const Model = styled.span`
  color: ${props => `${props.theme.colors.blue}`};
`;

export const LocationContainer = styled.div`
  display: flex;
  height: 18px;
  justify-content: start;
  align-items: center;
`;

export const Location = styled.p`
  display: flex;
  font-size: 12px;
  line-height: 18px;
  color: ${props => `${props.theme.colors.secondaryBlack}`};
`;

export const InfoContainer = styled.div`
  display: flex;
  height: 18px;
  justify-content: start;
  align-items: center;
`;

export const Info = styled.p`
  display: flex;
  font-size: 12px;
  line-height: 18px;
  color: ${props => `${props.theme.colors.secondaryBlack}`};
`;

export const Button = styled.button`
  height: 44px;
  cursor: pointer;
  border-radius: 12px;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: ${props => `${props.theme.colors.blue}`};
  font-size: 14px;
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

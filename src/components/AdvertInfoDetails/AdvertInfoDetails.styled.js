import styled from 'styled-components';

export const ModalContaim = styled.div`
  display: flex;
  flex-direction: column;
  width: 541px;
  height: 752px;
`;

export const Img = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const ContainerBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;
`;

export const Title = styled.h3`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: ${props => `${props.theme.colors.black}`};
`;

export const Model = styled.span`
  color: ${props => `${props.theme.colors.blue}`};
  margin-left: 4px;
`;

export const TextInfo = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 18px;
  color: ${props => `${props.theme.colors.secondaryBlack}`};
`;

export const TextDescription = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 20px;
  color: ${props => `${props.theme.colors.black}`};
  margin-bottom: 20px;
`;

export const BlockTitle = styled.h4`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${props => `${props.theme.colors.black}`};
`;

export const ContainerConditions = styled.div`
  display: flex;
`;

export const TextConditions = styled.p`
  display: flex;
  height: 32px;
  padding: 7px 14px;
  gap: 8px;
  font-size: 12px;
  line-height: 18px;
  color: ${props => `${props.theme.colors.blackConditionsText}`};
  vertical-align: baseline;
`;

export const TextSpan = styled.span`
  font-weight: 600;
  color: ${props => `${props.theme.colors.blue}`};
`;

export const Button = styled.div`
  width: 168px;
  height: 44px;
  cursor: pointer;
  border-radius: 12px;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: ${props => `${props.theme.colors.blue}`};
  &:hover {
    background-color: ${props => `${props.theme.colors.activeBlue}`};
  }
  &:focus {
    background-color: ${props => `${props.theme.colors.activeBlue}`};
  }
`;

export const Link = styled.a`
  cursor: pointer;
  display: flex;
  padding: 12px 50px;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${props => `${props.theme.colors.white}`};
  text-decoration: none;
`;

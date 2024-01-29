import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  align-items: end;
  gap: 18px;
  margin: 0 auto;
  margin-bottom: 24px;
`;

export const ContainerFilterMielage = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 74px;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${props => `${props.theme.colors.textLabel}`};
  margin-bottom: 8px;
`;

export const ContainerInputs = styled.div`
  display: flex;
`;

export const BtnSearch = styled.button`
  width: 136px;
  height: 48px;
  cursor: pointer;
  border-radius: 12px;
  border: none;

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

export const BtnReset = styled.button`
  width: 100px;
  height: 48px;
  cursor: pointer;
  border-radius: 12px;
  border: none;

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

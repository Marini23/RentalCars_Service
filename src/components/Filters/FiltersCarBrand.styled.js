import styled from 'styled-components';

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
  width: 224px;
  height: 74px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${props => `${props.theme.colors.textLabel}`};
  margin-bottom: 8px;
`;

export const Select = styled.select`
  height: 48px;
  border-radius: 14px;
  padding: 14px 89px 14 px 18px;
  align-items: center;
  background-color: ${props => `${props.theme.colors.grey}`};
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: ${props => `${props.theme.colors.black}`};
  background-color: ${props => `${props.theme.colors.grey}`};
`;

export const Option = styled.option`
  width: 224px;
  height: 48px;
  padding: 14px 89px 14 px 18px;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${props => `${props.theme.colors.textDropDown}`};
  background-color: ${props => `${props.theme.colors.grey}`};
  border: none;
  &:hover {
    background-color: transparent;
    color: ${props => `${props.theme.colors.black}`};
  }

  &:focus {
    background-color: transparent;
    color: ${props => `${props.theme.colors.black}`};
  }
`;

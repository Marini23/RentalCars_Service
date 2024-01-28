import styled from 'styled-components';

export const ContainerFilterMielage = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 74px;
`;

export const ContainerInputs = styled.div`
  display: flex;
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

export const ContainerInputFrom = styled.div`
  display: flex;
  width: 160px;
  height: 48px;
  background-color: ${props => `${props.theme.colors.grey}`};
  border-radius: 14px 0 0 14px;
  border-right: 1px solid rgba(204, 204, 204, 1);
`;

export const ContainerInputTo = styled.div`
  display: flex;
  width: 160px;
  height: 48px;
  background-color: ${props => `${props.theme.colors.grey}`};
  border-radius: 0 14px 14px 0;
`;

export const SpanFrom = styled.span`
  display: flex;
  width: 60px;
  height: 48px;
  align-items: center;
  justify-content: end;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: ${props => `${props.theme.colors.black}`};
`;

export const InputFrom = styled.input`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 5px;
  width: 100px;
  height: 48px;
  border: none;
  background-color: ${props => `${props.theme.colors.grey}`};
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: ${props => `${props.theme.colors.black}`};
  &:hover,
  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
`;

export const SpanTo = styled.span`
  display: flex;
  width: 38px;
  height: 48px;
  align-items: center;
  justify-content: end;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: ${props => `${props.theme.colors.black}`};
`;

export const InputTo = styled.input`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 5px;
  width: 122px;
  height: 48px;
  border: none;
  background-color: ${props => `${props.theme.colors.grey}`};
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: ${props => `${props.theme.colors.black}`};
  border-radius: 0 14px 14px 0;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
`;

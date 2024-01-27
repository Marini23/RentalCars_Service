import styled from 'styled-components';

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

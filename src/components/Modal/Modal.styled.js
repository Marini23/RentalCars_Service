import styled from 'styled-components';

export const Backdrop = styled.div`
  position: 'fixed';
  top: 0;
  left: 0;
  width: '100%';
  height: '100%';
  background-color: 'rgba(0, 0, 0, 0.5)'; // Semi-transparent background
  display: 'flex';
  align-items: 'center';
  justify-content: 'center';
`;

export const Container = styled.div`
  width: 541px;
  height: 752px;
  border-radius: 24px;
  padding: 40px;
`;

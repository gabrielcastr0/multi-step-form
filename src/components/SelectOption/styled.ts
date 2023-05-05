import styled from 'styled-components';

export const Container = styled.div<{ selected: boolean; }>`
  display: flex;
  border: 2px solid ${props => props.selected ? '#c6cdff' : '#248bd6'};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  align-items: center;
  cursor: pointer;

  &:hover{
    border: 2px solid #83b8ff;
  }
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Title = styled.span`
  font-size: 17px;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #b8b8d4;
`;
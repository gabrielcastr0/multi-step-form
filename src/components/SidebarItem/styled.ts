import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0;
  cursor: pointer;

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const Title = styled.div`
  text-align: right;
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 15px;
  color: #fff;
`;

export const Description = styled.div`
  text-align: right;
  font-size: 13px;
  color: #c6cdff;
`;

export const IconArea = styled.div<{ active: boolean; }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.active ? '#83b8ff' : '#248bd6'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Point = styled.div<{ active: boolean; }>`
  width: 6px;
  height: 6px;
  border: 3px solid #83b8ff;
  border-radius: 50%;
  margin-left: 30px;
  margin-right: -6px;
  background: ${props => props.active ? '#0f6bae' : '#248bd6'};
`;
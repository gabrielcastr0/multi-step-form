import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0f6bae;
  color: #fff;
  min-height: 100vh;
  padding: 30px;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Steps = styled.div`
  flex: 1;
  display: flex;

  @media (max-width: 425px){
    flex-direction: column;
    gap: 30px;
  }
`;

export const Sidebar = styled.div`
  width: 250px;
  border-right: 1px solid #248bd6;
`;

export const Page = styled.div`
  flex: 1;
  padding: 40px 0 0 40px;

  @media (max-width: 425px){
    padding: 0;
  }
`;
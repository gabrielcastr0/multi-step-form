import styled from "styled-components";

export const Container = styled.main`
  p{
    font-size: 13px;
    color: #c6cdff;
  }

  h1{
    margin: 0;
    padding: 0;
    font-size: 26px;
  }

  hr{
    height: 1px;
    border: 0;
    background: #248bd6;
    margin: 30px 0;
  }

  button{
    background: #248bd6;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
  }

  .backButton{
    font-size: 16px;
    text-decoration: none;
    padding: 20px 40px;
    color: #c6cdff;
  }
`;

export const FieldsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  font-size: 13px;
`;

export const Input = styled.input`
  display: block;
  margin-top: 7px;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border: 2px solid #83b8ff;
  border-radius: 5px;
  color: #fff;
  outline: 0;
  font-size: 15px;
  background: #0f6bae;
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;

  @media (max-width: 425px){
    justify-content: center;
  }
`;
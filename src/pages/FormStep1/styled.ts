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

  label{
    font-size: 13px;

    input{
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
    }
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
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
`;
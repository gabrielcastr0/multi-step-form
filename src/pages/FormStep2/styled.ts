import styled from "styled-components";

export const Container = styled.main`
  p{
    font-size: 13px;
    color: #b8b8d4;
  }

  h1{
    margin: 0;
    padding: 0;
    font-size: 26px;
  }

  hr{
    height: 1px;
    border: 0;
    background: #16195C;
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
      border: 2px solid #25CD89;
      border-radius: 10px;
      color: #fff;
      outline: 0;
      font-size: 15px;
      background: #02044a;
    }
  }

  button{
    background: #25CD89;
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
    color: #B8B8D4;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;

  @media (max-width: 425px){
    justify-content: center;
  }
`;
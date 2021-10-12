import styled, { css } from "styled-components";

export const Contact = styled.div`
  background: rgb(220, 120, 11, 0.1);
  padding: 115px 0 117px;
`;

export const Container = styled.div`
  padding: 0 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImputWrapper = styled.div`
  width: 750px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 46px;
`;

export const Input = styled.input`
  width: 600px;
  padding: 24px 32px;
  border-radius: 10px;
  border: none;
`;

export const SendButton = styled.div`
  background: #dc780b;
  border-radius: 10px;
  color: #fff;
  width: 150px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  padding: 24px 57px;
  cursor: pointer;
`;

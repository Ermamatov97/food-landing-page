import styled, { css } from "styled-components";

export const Showcase = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-position: 660px -35px;
  background-size: 880px;
`;

export const Container = styled.div`
  margin: 0 150px;
`;

Container.TextBox = styled.div`
  width: 550px;
  padding-top: 150px;
`;

export const MainText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 48.83px;
  color: #150c01;
`;

export const SubText = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #150c01;
  opacity: 0.7;
  margin-top: 40px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 50px;
`;

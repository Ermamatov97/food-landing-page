import styled, { css } from "styled-components";

export const TakeAwey = styled.div`
  background: rgb(251, 241, 231, 0.4);
  margin-bottom: 213px;
`;

export const Container = styled.div`
  padding: 115px 150px 130px;
  display: flex;
`;

Container.Child = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.8;
  padding-left: 110px;
`;

Container.ImgBox = styled.div`
  display: flex;
  flex: 1.2;
  padding-left: 300px;
`;

export const PhoneImg = styled.img`
  width: 138px;
  height: 280px;
  transform: scale(2.5);
`;

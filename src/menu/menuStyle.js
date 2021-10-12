import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 0 150px 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionSubText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #150c01;
  opacity: 0.7;
  text-align: ${({ center }) => center && "center"};
  margin-top: 25px;
`;

export const CardBox = styled.div`
  padding: 60px 0 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const MenuCard = styled.div`
  width: 360px;
  border-radius: 75px 10px 10px 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 35px;
`;

MenuCard.Img = styled.img`
  width: 100%;
  height: 264px;
  border-radius: 75px 0 75px 0;
`;

export const MenuCardContent = styled.div`
  padding: 7px 25px 25px;
`;

MenuCardContent.Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuCardText = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #150c01;
  opacity: 0.7;
  margin-top: 20px;
`;

MenuCardContent.Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

export const PlusButton = styled.div`
  width: 36px;
  height: 34px;
  background: #dc780b;
  border-radius: 5px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const StarsBox = styled.div`
  width: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

StarsBox.Img = styled.img`
  width: 16px;
  cursor: pointer;
`;

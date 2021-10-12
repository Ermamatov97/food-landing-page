import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 50px 150px 120px;
`;

export const SectionSupText = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: ${({ center }) => (center ? "center" : "left")};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #dc780b;
  opacity: 0.7;
`;

export const SectionTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 31.25px;
  line-height: 35px;
  text-transform: capitalize;
  color: #150c01;
  text-align: ${({ center }) => (center ? "center" : "left")};
  margin-top: 10px;
`;

export const Features = styled.div`
  display: flex;
  padding-top: 44px;
`;

Features.Child = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const IgmBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: ${({ bgcolor }) => {
    if (bgcolor === "green") return "rgba(143, 166, 50, 0.1)";
    if (bgcolor === "red") return "rgba(230, 77, 46, 0.1)";
    if (bgcolor === "orange") return "rgba(220, 120, 11, 0.1)";
  }};
  margin-bottom: 33px;
`;

Features.Icon = styled.img`
  width: 45px;
  height: 45px;
`;

export const BoxTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  color: #150c01;
`;

export const BoxText = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: ${({ center }) => (center ? "center" : "left")};
  color: #150c01;
  opacity: 0.7;
  margin-top: 15px;
  width: 300px;
`;

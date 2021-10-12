import styled, { css } from "styled-components";

export const Footer = styled.div`
  background: #252525;
`;

export const Container = styled.div`
  padding: 137px 150px 104px;
  display: flex;
`;

Container.Child = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: #fff;
`;

export const FooterLogo = styled.img`
  width: 61px;
  height: 60px;
  margin-bottom: 25px;
`;

export const FooterLink = styled.a`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #ffffff;
  opacity: 0.7;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "17px" : "20px")};
`;

export const FooterTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 26px;
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterIcon = styled.img`
  width: 21px;
  height: 21px;
  margin-right: 10px;
  cursor: pointer;
`;

export const IconLink = styled.a``;

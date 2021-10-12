import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0 150px;
  display: flex;
  align-items: center;
  padding: 30px 0 0;
`;

export const Logo = styled.img`
  width: 44px;
  height: 43px;
`;

export const NavItem = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => (props.isActive ? "#DC780B" : "#150C01")};
  opacity: ${(props) => !props.isActive && 0.6};
  margin-left: 40px;
  cursor: pointer;
`;

export const Button = styled.div`
  width: 155px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  cursor: pointer;
  border: 1.5px solid #dc780b;
  border-radius: 5px;
  margin-left: ${({ booking }) => booking && "auto"};
  color: ${({ color, bgcolor }) => (color ? bgcolor : "#fff")};
  background-color: ${({ bgcolor }) => bgcolor};
  margin-right: ${({ marginRight }) => marginRight && "30px"};
  margin-top: ${({ marginTop }) => marginTop && "30px"};
`;

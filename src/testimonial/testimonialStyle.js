import styled, { css } from "styled-components";

export const Testimonial = styled.div`
  padding: 0 150px 120px;
`;

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SlideButton = styled.div`
  display: flex;
  flex: 1;
  margin-left: 140px;
  cursor: pointer;
  padding: 5px;
  font-size: 26px;
  font-weight: bolder;
`;

export const SlideInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 3;
  /* background-color: red; */
`;

export const SlideImg = styled.img`
  width: 140px;
  height: 140px;
`;

export const SlideText = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  margin-top: 8px;
`;

export const Star = styled.img`
  width: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

export const TestimonName = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  margin-top: 30px;
`;

export const TestimonJob = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  text-transform: uppercase;
  color: #000000;
  opacity: 0.7;
  margin-top: 6px;
`;

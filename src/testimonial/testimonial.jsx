import React, { Component } from "react";
import { SectionSupText, SectionTitle } from "../features/featuresStyle";
import { SectionSubText, StarsBox } from "../menu/menuStyle";
import {
  SlideButton,
  SlideImg,
  SlideInfo,
  SliderWrapper,
  SlideText,
  Testimonial,
  Star,
  TestimonName,
  TestimonJob,
} from "./testimonialStyle";
import SlideAvatar from "../img/slide-avatar.png";
import SlideStar from "../img/star-solid.svg";

export default class testimonial extends Component {
  render() {
    return (
      <Testimonial>
        <SectionSupText center>Testimonial</SectionSupText>
        <SectionTitle center>Making Food great again and again</SectionTitle>
        <SectionSubText style={{ padding: "0 250px", textAlign: "center" }}>
          You need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers, Effective Product catlogues etc
          very successful to make your.
        </SectionSubText>
        <SliderWrapper>
          <SlideButton>{"<"}</SlideButton>
          <SlideInfo>
            <SlideImg src={SlideAvatar} />
            <SlideText>
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers, Effective
              Product catlogues etc very successful to make your.
            </SlideText>
            <StarsBox>
              <Star src={SlideStar} />
              <Star src={SlideStar} />
              <Star src={SlideStar} />
              <Star src={SlideStar} />
              <Star src={SlideStar} />
            </StarsBox>
            <TestimonName>Augusta W. Reynoso</TestimonName>
            <TestimonJob>UI&UX DeSIGNER</TestimonJob>
          </SlideInfo>
          <SlideButton>{">"}</SlideButton>
        </SliderWrapper>
      </Testimonial>
    );
  }
}

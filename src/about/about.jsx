import React, { Component } from "react";
import { Container, AboutImg, ContentBox } from "./aboutStyle";
import Img from "../img/about-img.png";
import { SectionSupText, SectionTitle } from "../features/featuresStyle";
import { Button } from "../navbar/navbarStyle";
import { SectionSubText } from "../menu/menuStyle";

export default class about extends Component {
  render() {
    return (
      <Container>
        <AboutImg src={Img} />
        <ContentBox>
          <SectionSupText>About us</SectionSupText>
          <SectionTitle>
            Food Stalls with Persons but to Product marketing plane catlogues
            etc to.
          </SectionTitle>
          <SectionSubText>
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also equipment
            make your marketing plane Effective.
          </SectionSubText>
          <Button marginTop bgcolor="#dc780b">
            Read More
          </Button>
        </ContentBox>
      </Container>
    );
  }
}

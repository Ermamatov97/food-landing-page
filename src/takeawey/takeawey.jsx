import React, { Component } from "react";
import { SectionSupText, SectionTitle } from "../features/featuresStyle";
import { SectionSubText } from "../menu/menuStyle";
import { Button } from "../navbar/navbarStyle";
import { ButtonWrapper } from "../showcase/showcaseStyle";
import { TakeAwey, Container, PhoneImg } from "./takeStyle";
import Phone from "../img/phone.png";

export default class takeawey extends Component {
  render() {
    return (
      <TakeAwey>
        <Container>
          <Container.Child>
            <SectionSupText>Take Awey</SectionSupText>
            <SectionTitle>
              Food Stalls with Persons but to Product marketing plane.
            </SectionTitle>
            <SectionSubText>
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipmentwith Persons but also Just Food Stalls with
              Persons.
            </SectionSubText>
            <ButtonWrapper>
              <Button bgcolor="#dc780b" marginRight>
                Google
              </Button>
              <Button bgcolor="#dc780b">Apple</Button>
            </ButtonWrapper>
          </Container.Child>
          <Container.ImgBox>
            <PhoneImg src={Phone} alt="fuckking img" />
          </Container.ImgBox>
        </Container>
      </TakeAwey>
    );
  }
}

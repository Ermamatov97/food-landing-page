import React, { Component } from "react";
import { SectionSupText, SectionTitle } from "../features/featuresStyle";
import {
  Contact,
  Container,
  ImputWrapper,
  Input,
  SendButton,
} from "./contactStyle";

export default class contact extends Component {
  render() {
    return (
      <Contact>
        <Container>
          <SectionSupText>Contact</SectionSupText>
          <SectionTitle center style={{ padding: "0 250px" }}>
            Food Stalls with Persons but also specialized equipment, Skills to
            manage.
          </SectionTitle>
          <ImputWrapper>
            <Input placeholder="Enter your name"></Input>
            <SendButton>Send</SendButton>
          </ImputWrapper>
        </Container>
      </Contact>
    );
  }
}

import React, { Component } from "react";
import {
  Showcase,
  Container,
  MainText,
  SubText,
  ButtonWrapper,
} from "./showcaseStyle";
import PanImg from "../img/pan.png";
import { Button } from "../navbar/navbarStyle";

export default class showcase extends Component {
  render() {
    return (
      <Showcase imgUrl={PanImg}>
        <Container>
          <Container.TextBox>
            <MainText>
              Making time a good time by making food the good food.
            </MainText>
            <SubText>
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipment,
            </SubText>
            <ButtonWrapper>
              <Button marginRight bgcolor="#DC780B">
                Order Now
              </Button>
              <Button color>Food Details</Button>
            </ButtonWrapper>
          </Container.TextBox>
        </Container>
      </Showcase>
    );
  }
}

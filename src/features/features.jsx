import React, { Component } from "react";
import IconOne from "../img/Features-one.png";
import IconTwo from "../img/Features-two.png";
import IconThree from "../img/Features-three.png";
import {
  Container,
  SectionSupText,
  SectionTitle,
  Features,
  IgmBox,
  BoxTitle,
  BoxText,
} from "./featuresStyle";

export default class features extends Component {
  render() {
    return (
      <Container>
        <SectionSupText center>Features</SectionSupText>
        <SectionTitle center>Food with a New Passion</SectionTitle>
        <Features>
          <Features.Child>
            <IgmBox bgcolor="green">
              <Features.Icon src={IconOne} />
            </IgmBox>
            <BoxTitle>Quality Food</BoxTitle>
            <BoxText center>
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </BoxText>
          </Features.Child>
          <Features.Child>
            <IgmBox bgcolor="red">
              <Features.Icon src={IconTwo} />
            </IgmBox>
            <BoxTitle>Food Delivery</BoxTitle>
            <BoxText center>
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </BoxText>
          </Features.Child>
          <Features.Child>
            <IgmBox bgcolor="orange">
              <Features.Icon src={IconThree} />
            </IgmBox>
            <BoxTitle>Super Taste</BoxTitle>
            <BoxText center>
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </BoxText>
          </Features.Child>
        </Features>
      </Container>
    );
  }
}

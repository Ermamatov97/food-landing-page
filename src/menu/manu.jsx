import React, { Component } from "react";
import {
  BoxTitle,
  SectionSupText,
  SectionTitle,
} from "../features/featuresStyle";
import {
  CardBox,
  Container,
  MenuCard,
  SectionSubText,
  MenuCardContent,
  MenuCardText,
  PlusButton,
  StarsBox,
} from "./menuStyle";
import VeggieImg from "../img/veggie.png";
import SaladsImg from "../img/salads.png";
import BurgerImg from "../img/burger.png";
import SteakImg from "../img/steak.png";
import EggImg from "../img/egg.png";
import PeachImg from "../img/peach.png";
import Star from "../img/star-solid.svg";
import { Button } from "../navbar/navbarStyle";

export default class manu extends Component {
  render() {
    return (
      <Container>
        <SectionSupText center>Menu</SectionSupText>
        <SectionTitle center>Food Full of treaty Love</SectionTitle>
        <SectionSubText style={{ padding: "0 250px" }} center>
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers,
        </SectionSubText>
        <CardBox>
          <MenuCard>
            <MenuCard.Img src={VeggieImg} />
            <MenuCardContent>
              <MenuCardContent.Top>
                <BoxTitle>Vegie Muffen</BoxTitle>
                <BoxTitle>16$</BoxTitle>
              </MenuCardContent.Top>
              <MenuCardText>
                There are many things are needed to start the Fast Food
                Business.
              </MenuCardText>
              <MenuCardContent.Bottom>
                <PlusButton>+</PlusButton>
                <StarsBox>
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                </StarsBox>
              </MenuCardContent.Bottom>
            </MenuCardContent>
          </MenuCard>

          <MenuCard>
            <MenuCard.Img src={SaladsImg} />
            <MenuCardContent>
              <MenuCardContent.Top>
                <BoxTitle>Salads</BoxTitle>
                <BoxTitle>12$</BoxTitle>
              </MenuCardContent.Top>
              <MenuCardText>
                There are many things are needed to start the Fast Food
                Business.
              </MenuCardText>
              <MenuCardContent.Bottom>
                <PlusButton>+</PlusButton>
                <StarsBox>
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                </StarsBox>
              </MenuCardContent.Bottom>
            </MenuCardContent>
          </MenuCard>

          <MenuCard>
            <MenuCard.Img src={BurgerImg} />
            <MenuCardContent>
              <MenuCardContent.Top>
                <BoxTitle>Burger</BoxTitle>
                <BoxTitle>10$</BoxTitle>
              </MenuCardContent.Top>
              <MenuCardText>
                There are many things are needed to start the Fast Food
                Business.
              </MenuCardText>
              <MenuCardContent.Bottom>
                <PlusButton>+</PlusButton>
                <StarsBox>
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                </StarsBox>
              </MenuCardContent.Bottom>
            </MenuCardContent>
          </MenuCard>

          <MenuCard>
            <MenuCard.Img src={SteakImg} />
            <MenuCardContent>
              <MenuCardContent.Top>
                <BoxTitle>Delmonico Steak dish</BoxTitle>
                <BoxTitle>14$</BoxTitle>
              </MenuCardContent.Top>
              <MenuCardText>
                There are many things are needed to start the Fast Food
                Business.
              </MenuCardText>
              <MenuCardContent.Bottom>
                <PlusButton>+</PlusButton>
                <StarsBox>
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                </StarsBox>
              </MenuCardContent.Bottom>
            </MenuCardContent>
          </MenuCard>

          <MenuCard>
            <MenuCard.Img src={EggImg} />
            <MenuCardContent>
              <MenuCardContent.Top>
                <BoxTitle>Egg Masala</BoxTitle>
                <BoxTitle>9$</BoxTitle>
              </MenuCardContent.Top>
              <MenuCardText>
                There are many things are needed to start the Fast Food
                Business.
              </MenuCardText>
              <MenuCardContent.Bottom>
                <PlusButton>+</PlusButton>
                <StarsBox>
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                </StarsBox>
              </MenuCardContent.Bottom>
            </MenuCardContent>
          </MenuCard>

          <MenuCard>
            <MenuCard.Img src={PeachImg} />
            <MenuCardContent>
              <MenuCardContent.Top>
                <BoxTitle>Peach Melba dish</BoxTitle>
                <BoxTitle>15$</BoxTitle>
              </MenuCardContent.Top>
              <MenuCardText>
                There are many things are needed to start the Fast Food
                Business.
              </MenuCardText>
              <MenuCardContent.Bottom>
                <PlusButton>+</PlusButton>
                <StarsBox>
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                  <StarsBox.Img src={Star} />
                </StarsBox>
              </MenuCardContent.Bottom>
            </MenuCardContent>
          </MenuCard>
        </CardBox>
        <Button color>Learn more</Button>
      </Container>
    );
  }
}

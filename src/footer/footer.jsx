import React, { Component } from "react";
import {
  Footer,
  Container,
  FooterLogo,
  FooterLink,
  FooterTitle,
  FooterIconWrapper,
  FooterIcon,
  IconLink,
} from "./footer";
import Logo from "../img/food-logo.png";
import Instagram from "../img/instagram.png";
import Facebook from "../img/facebook.png";
import Twiter from "../img/twiter.png";
import YouTube from "../img/youtube.png";

export default class footer extends Component {
  render() {
    return (
      <Footer>
        <Container>
          <Container.Child>
            <IconLink href="#">
              <FooterLogo src={Logo} />
            </IconLink>
            <FooterLink marginBottom href="#">
              www.company name.com
            </FooterLink>
            <FooterLink marginBottom href="#">
              companyname@gmail.com
            </FooterLink>
            <FooterLink marginBottom href="#">
              Phone: +7 485-118-03-25
            </FooterLink>
          </Container.Child>
          <Container.Child>
            <FooterTitle>Home</FooterTitle>
            <FooterLink href="#">Landingpage</FooterLink>
            <FooterLink href="#">Documentation</FooterLink>
            <FooterLink href="#">Referral Program</FooterLink>
            <FooterLink href="#">UI & UX Design</FooterLink>
            <FooterLink href="#">Web Design</FooterLink>
          </Container.Child>
          <Container.Child>
            <FooterTitle>Menu</FooterTitle>
            <FooterLink href="#">Landingpage</FooterLink>
            <FooterLink href="#">Documentation</FooterLink>
            <FooterLink href="#">Referral Program</FooterLink>
            <FooterLink href="#">UI & UX Design</FooterLink>
            <FooterLink href="#">UI & UX Design</FooterLink>
          </Container.Child>
          <Container.Child>
            <FooterTitle>Company</FooterTitle>
            <FooterLink href="#">Landingpage</FooterLink>
            <FooterLink href="#">Documentation</FooterLink>
            <FooterLink href="#">Referral Program</FooterLink>
            <FooterIconWrapper>
              <IconLink href="#">
                <FooterIcon src={Instagram} />
              </IconLink>
              <IconLink href="#">
                <FooterIcon src={Facebook} />
              </IconLink>
              <IconLink href="#">
                <FooterIcon src={Twiter} />
              </IconLink>
              <IconLink href="#">
                <FooterIcon src={YouTube} />
              </IconLink>
            </FooterIconWrapper>
          </Container.Child>
        </Container>
      </Footer>
    );
  }
}

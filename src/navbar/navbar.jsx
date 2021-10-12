import React, { Component } from "react";
import { Logo, NavItem, Container, Button } from "./navbarStyle";
import SaytLogo from "../img/food-logo.png";

export default class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: "home",
    };
  }
  render() {
    return (
      <Container>
        <Logo src={SaytLogo} />
        <NavItem
          onClick={() => this.setState({ isActive: "home" })}
          isActive={this.state.isActive === "home"}
        >
          Home
        </NavItem>
        <NavItem
          onClick={() => this.setState({ isActive: "about" })}
          isActive={this.state.isActive === "about"}
        >
          About us
        </NavItem>
        <NavItem
          onClick={() => this.setState({ isActive: "menu" })}
          isActive={this.state.isActive === "menu"}
        >
          Menu
        </NavItem>
        <NavItem
          onClick={() => this.setState({ isActive: "features" })}
          isActive={this.state.isActive === "features"}
        >
          Features
        </NavItem>
        <NavItem
          onClick={() => this.setState({ isActive: "contact" })}
          isActive={this.state.isActive === "contact"}
        >
          Contact us
        </NavItem>
        <Button booking bgcolor="#dc780b">
          Booking Now
        </Button>
      </Container>
    );
  }
}

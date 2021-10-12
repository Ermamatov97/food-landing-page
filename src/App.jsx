import React, { Component } from "react";
import "./App.css";
import { Wrapper } from "./appStyle";
import Navbar from "./navbar/navbar.jsx";
import Showcase from "./showcase/showcase.jsx";
import Features from "./features/features.jsx";
import About from "./about/about.jsx";
import Menu from "./menu/manu.jsx";
import TakeAwey from "./takeawey/takeawey.jsx";
import Testimonial from "./testimonial/testimonial.jsx";
import Contact from "./contact/contact.jsx";
import Footer from "./footer/footer.jsx";

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Showcase />
        <Features />
        <About />
        <Menu />
        <TakeAwey />
        <Testimonial />
        <Contact />
        <Footer />
      </Wrapper>
    );
  }
}

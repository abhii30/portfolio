import React from "react";
import Buttons from "./buttons";
import ME from "../../assets/img.png";
import "./header.css";
import Social from "./Social";

const Header = () => {
  return (
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Abhishek</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <Buttons />
      <div className="me">
        <img src={ME} alt="me" />
      </div>
      <Social />
      <a href="#contact" className="scroll_down">
        Scroll Down
      </a>
    </div>
  );
};

export default Header;

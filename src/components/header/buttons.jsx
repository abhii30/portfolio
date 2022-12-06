import React from "react";
import CV from "../../assets/Abhishek_Resume.pdf";
const Buttons = () => {
  return (
    <div className="buttons">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Connect
      </a>
    </div>
  );
};

export default Buttons;

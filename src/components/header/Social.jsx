import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
const Social = () => {
  return (
    <div className="header_social">
      <a href="http://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="http://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="http://instagram.com" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default Social;

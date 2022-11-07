import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="__blank" rel="">
        <BsLinkedin />
      </a>
      <a href="https://twitter.com" target="__blank" rel="">
        <BsTwitter />
      </a>
      <a href="https://github.com" target="__blank" rel="">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;

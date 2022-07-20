import React from "react";

import { IconsContainer, Icon } from "./SocialIcons.style";

import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { FaItchIo } from "react-icons/fa";

const SocialIcons = (props) => {
  return (
    <>
      <IconsContainer isOpen={props.isOpen}>
        <Icon
          href="https://www.linkedin.com/in/mikel-kamel-65502b209/"
          target="_blank"
        >
          <RiLinkedinFill />
        </Icon>
        <Icon href="https://github.com/BigMikeL9" target="_blank">
          <AiFillGithub />
        </Icon>
        <Icon href="https://mikejam.itch.io/" target="_blank">
          <FaItchIo />
        </Icon>
      </IconsContainer>
    </>
  );
};

export default SocialIcons;

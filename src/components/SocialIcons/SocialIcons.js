import React from "react";

import { IconsContainer, Icon, HoverTitle } from "./SocialIcons.style";

import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub, AiOutlineCloudDownload } from "react-icons/ai";
import { FaItchIo } from "react-icons/fa";

import resumePDF from "../../assets/resume/mikel_kamel-resume.pdf";

const SocialIcons = (props) => {
  return (
    <>
      <IconsContainer isOpen={props.isOpen}>
        <Icon
          href={resumePDF}
          download="Mikel Kamel - Resume"
          title="Download Resume"
          top={"3px"}
        >
          <AiOutlineCloudDownload size={"2.8rem"} />

          {/* <HoverTitle>Download Resume</HoverTitle> */}
        </Icon>

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

import React from "react";

import { AboutSection } from "./About.style";
import { SectionInner } from "../../../layout/Section/Section.style";
import { H2, P } from "../../../styles/Typography.style";
import Divider from "../../../components/UI/Divider/Divider";

const About = () => {
  return (
    <AboutSection id="about">
      <SectionInner>
        <H2>About Me</H2>
        <Divider />

        <P>👋 Hello!</P>
        <P mt={"1rem"}>
          I'm Mikel Kamel, a <span>web developer</span> who loves to bring
          people's visions to life by designing and developing websites and
          web-based applications, just like this one. I'm a Civil Engineer
          graduate from NJIT whose passion for web development has led me to
          change my career path and take on a new exciting and challenging path.
          I love creating awesome user experiences and experimenting with new
          technology to make unique websites.
        </P>

        <P mt={"2rem"}>
          Since beginning my journey as a web developer, I have created
          successful responsive websites that are fast, easy to use, and built
          with best practices. The main area of my expertise is front-end
          development, HTML, CSS, JS, ReactJS, building small and medium web
          apps, features, animations, and coding interactive layouts.
        </P>

        <P mt={"2rem"}>
          Here you can see some of the projects I've been working on. If you
          have any questions please feel free to contact me.
        </P>
      </SectionInner>
    </AboutSection>
  );
};

export default About;

import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { H4 } from "../../../styles/Typography.style";
import Divider from "../../../components/UI/Divider/Divider";
import { AnchorTagS } from "../../../components/UI/Links/Links.style";
import {
  HeroSection,
  HeroSectionInner,
  HeroTitleContainer,
  HeroTitle,
  ButtonsContainer,
  GithubIcon,
} from "./Hero.style";
import { FiGithub } from "react-icons/fi";

const Hero = (props) => {
  const githubIconRef = useRef();

  const { title, type, url, github } = props.currentWork;

  // --------------------------------------------------
  /* -- Pass 'inView' value to Navbar through props drilling, inorder to change color when 'WorkDetail' page's Hero section is NOT in view. 

   -- Lifting state up to 'App.js' --> then passing it down to 'Header.js'  -->  then to 'NavBar.js'
  */

  const { ref, inView, entry } = useInView({
    rootMargin: "-50px 0px 0px 0px",
  });

  const { onDetailPageHeroExitView } = props;

  useEffect(() => {
    onDetailPageHeroExitView(inView);
  }, [inView, onDetailPageHeroExitView]);
  // -----------------------------------------------------------

  const iconClickHandler = () => {
    githubIconRef.current.blur();
  };

  return (
    <HeroSection ref={ref}>
      <HeroSectionInner>
        <HeroTitleContainer>
          <HeroTitle>{title}</HeroTitle>
          <Divider mb={"2rem"} />
          <H4>{type}</H4>

          <ButtonsContainer>
            <AnchorTagS href={url} target="_blank">
              Visit Site
            </AnchorTagS>

            {github && (
              <GithubIcon
                href={github}
                target="_blank"
                ref={githubIconRef}
                onClick={iconClickHandler}
              >
                <FiGithub />
              </GithubIcon>
            )}
          </ButtonsContainer>
        </HeroTitleContainer>

        {/* <HeroImageContainer>
      <HeroImage src={Stars} alt="Stars" />
    </HeroImageContainer>

    <HeroImageContainer>
      <HeroImage src={Lights} alt="Moon Lights" />
    </HeroImageContainer> */}
      </HeroSectionInner>
    </HeroSection>
  );
};

export default Hero;

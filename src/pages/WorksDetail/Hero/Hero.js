import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { H4 } from "../../../styles/Typography.style";
import Divider from "../../../components/UI/Divider/Divider";
import { AnchorTagS } from "../../../components/UI/Links/Links.style";
import {
  HeroSection,
  HeroSectionInner,
  HeroTitleContainer,
  HeroTitle,
} from "./Hero.style";

const Hero = (props) => {
  // --------------------------------------------------
  /* -- Pass 'inView' value to Navbar thought props drilling, inorder to change color when 'WorkDetail' page's Hero section is NOT in view. 

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

  return (
    <HeroSection ref={ref}>
      <HeroSectionInner>
        <HeroTitleContainer>
          <HeroTitle>{props.currentWork.title}</HeroTitle>
          <Divider mb={"2rem"} />
          <H4>{props.currentWork.type}</H4>

          <AnchorTagS href={props.currentWork.url} target="_blank" mt={"4rem"}>
            Visit Site
          </AnchorTagS>
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

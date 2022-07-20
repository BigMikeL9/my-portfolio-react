import React, { useRef } from "react";
import Parallax from "parallax-js";

import Divider from "../UI/Divider/Divider";

import Moon from "../../assets/img/moon.svg";
import Lights from "../../assets/img/lights.svg";
import Stars from "../../assets/img/stars.svg";
import Cloud1 from "../../assets/img/fog1.svg";
import Cloud2 from "../../assets/img/fog2.svg";
import Cloud3 from "../../assets/img/fog3.svg";
import Cloud1_b from "../../assets/img/b_fog1.svg";
import Cloud2_b from "../../assets/img/b_fog2.svg";

import { H1, H4 } from "../../styles/Typography.style";

import {
  HeroSection,
  HeroContainer,
  HeroTitleContainer,
  HeroImageContainer,
  HeroImage,
  HeroImageFront,
  HeroImageBack,
  PortfolioText,
  Cloud1fContainer,
  Cloud2fContainer,
  Cloud3fContainer,
  Cloud1bContainer,
  Cloud2bContainer,
  StarsContainer,
  MoonContainer,
  LightsContainer,
} from "./Hero.style";
import { useEffect } from "react";
import { SectionInner } from "../../layout/Section/Section.style";

const Hero = () => {
  const heroImageRef = useRef();

  useEffect(() => {
    new Parallax(heroImageRef.current);
  }, []);

  return (
    <HeroSection id="hero">
      <SectionInner>
        <HeroContainer>
          <HeroTitleContainer>
            <H1>
              Mikel <br /> Kamel
            </H1>
            <Divider />
            <H4>Front-End Web Developer</H4>
          </HeroTitleContainer>

          <HeroImageContainer>
            <HeroImage ref={heroImageRef}>
              <HeroImageFront data-depth="0.2">
                <PortfolioText>
                  <p>Portfolio</p>
                </PortfolioText>
              </HeroImageFront>

              <HeroImageFront data-depth="0.5">
                <Cloud1fContainer>
                  <img src={Cloud1} alt="Cloud" />
                </Cloud1fContainer>
              </HeroImageFront>

              <HeroImageFront data-depth="0.3">
                <Cloud2fContainer>
                  <img src={Cloud2} alt="Cloud" />
                </Cloud2fContainer>
              </HeroImageFront>

              <HeroImageFront data-depth="0.4">
                <Cloud3fContainer>
                  <img src={Cloud3} alt="Cloud" />
                </Cloud3fContainer>
              </HeroImageFront>

              <HeroImageBack data-depth="0.3">
                <Cloud1bContainer>
                  <img src={Cloud1_b} alt="Cloud" />
                </Cloud1bContainer>
              </HeroImageBack>

              <HeroImageBack data-depth="0.4">
                <Cloud2bContainer>
                  <img src={Cloud2_b} alt="Cloud" />
                </Cloud2bContainer>
              </HeroImageBack>

              <HeroImageBack data-depth="0.4">
                <StarsContainer>
                  <img src={Stars} alt="Stars" />
                </StarsContainer>
              </HeroImageBack>

              <HeroImageBack data-depth="0.2">
                <MoonContainer>
                  <img src={Moon} alt="Moon" />
                </MoonContainer>
              </HeroImageBack>

              <HeroImageBack data-depth="0.2">
                <LightsContainer>
                  <img src={Lights} alt="Lights" />
                </LightsContainer>
              </HeroImageBack>
            </HeroImage>
          </HeroImageContainer>
        </HeroContainer>
      </SectionInner>
    </HeroSection>
  );
};

export default Hero;

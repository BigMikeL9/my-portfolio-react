import React from "react";

import Divider from "../UI/Divider/Divider";

import Moon from "../../assets/img/moon.svg";
import Lights from "../../assets/img/lights.svg";
import Stars from "../../assets/img/stars.svg";
import Cloud1 from "../../assets/img/fog1.svg";
import Cloud2 from "../../assets/img/fog2.svg";
import Cloud3 from "../../assets/img/fog3.svg";
import Cloud1_b from "../../assets/img/b_fog1.svg";
import Cloud2_b from "../../assets/img/b_fog2.svg";

import { H1, H3 } from "../../styles/Typography.style";

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

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroTitleContainer>
          <H1>
            Mikel <br /> Kamel
          </H1>
          <Divider />
          <H3>
            Web Developer / <br /> Gameplay Programmer
          </H3>
        </HeroTitleContainer>

        <HeroImageContainer>
          <HeroImage>
            <HeroImageFront>
              <PortfolioText>
                <p>Portfolio</p>
              </PortfolioText>
            </HeroImageFront>

            <HeroImageFront>
              <Cloud1fContainer>
                <img src={Cloud1} alt="Cloud" />
              </Cloud1fContainer>
            </HeroImageFront>

            <HeroImageFront>
              <Cloud2fContainer>
                <img src={Cloud2} alt="Cloud" />
              </Cloud2fContainer>
            </HeroImageFront>

            <HeroImageFront>
              <Cloud3fContainer>
                <img src={Cloud3} alt="Cloud" />
              </Cloud3fContainer>
            </HeroImageFront>

            <HeroImageBack>
              <Cloud1bContainer>
                <img src={Cloud1_b} alt="Cloud" />
              </Cloud1bContainer>
            </HeroImageBack>

            <HeroImageBack>
              <Cloud2bContainer>
                <img src={Cloud2_b} alt="Cloud" />
              </Cloud2bContainer>
            </HeroImageBack>

            <HeroImageBack>
              <StarsContainer>
                <img src={Stars} alt="Stars" />
              </StarsContainer>
            </HeroImageBack>

            <HeroImageFront>
              <img src={Moon} alt="Moon" />
            </HeroImageFront>

            <HeroImageBack>
              <LightsContainer>
                <img src={Lights} alt="Lights" />
              </LightsContainer>
            </HeroImageBack>
          </HeroImage>
        </HeroImageContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;

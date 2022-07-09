import React from "react";

import { DividerS } from "../UI/Divider/Divider";
import { heroData } from "../../data/HeroData";

import moon from "../../assets/img/moon.svg";
import lights from "../../assets/img/lights.svg";
import stars from "../../assets/img/stars.svg";
import cloud1 from "../../assets/img/fog1.svg";
import cloud2 from "../../assets/img/fog2.svg";
import cloud3 from "../../assets/img/fog3.svg";
import cloud1_b from "../../assets/img/b_fog1.svg";
import cloud2_b from "../../assets/img/b_fog2.svg";

import {
  HeroSection,
  HeroCont,
  HeroTitleCont,
  HeroTitle,
  HeroLead,
  HeroImageCont,
  HeroImage,
  HeroFront,
  PortfolioText,
  Cloud1f,
  Cloud2f,
  Cloud3f,
  Cloud1b,
  Cloud2b,
  HeroBack,
  Stars,
  Moon,
  Lights,
} from "./HeroElements";

const Hero = () => {
  console.log(heroData);

  return (
    <HeroSection id="hero">
      <HeroCont>
        <HeroTitleCont>
          <HeroTitle></HeroTitle>
          <DividerS />
          <HeroLead></HeroLead>
        </HeroTitleCont>

        <HeroImageCont>
          <HeroImage>
            <HeroFront>
              <PortfolioText />
            </HeroFront>

            <HeroFront>
              <Cloud1f>
                <moon />
              </Cloud1f>
            </HeroFront>

            <HeroFront>
              <Cloud2f
                className=""
                href={heroData.heroImages.cloud2.image}
                alt={heroData.heroImages.cloud2.altText}
              />
            </HeroFront>

            <HeroFront>
              <Cloud3f
                className=""
                href={heroData.heroImages.cloud3.image}
                alt={heroData.heroImages.cloud3.altText}
              />
            </HeroFront>

            <HeroBack>
              <Cloud1b
                className=""
                href={heroData.heroImages.cloud1_b.image}
                alt={heroData.heroImages.cloud1_b.altText}
              />
            </HeroBack>

            <HeroBack>
              <Cloud2b
                className=""
                href={heroData.heroImages.cloud2_b.image}
                alt={heroData.heroImages.cloud2_b.altText}
              />
            </HeroBack>

            <HeroBack>
              <Stars
                className=""
                href={heroData.heroImages.stars.image}
                alt={heroData.heroImages.stars.altText}
              />
            </HeroBack>

            <HeroBack>
              <Moon
                className=""
                href={heroData.heroImages.moon.image}
                alt={heroData.heroImages.moon.altText}
              />
            </HeroBack>

            <HeroBack>
              <Lights
                className=""
                href={heroData.heroImages.lights.image}
                alt={heroData.heroImages.lights.altText}
              />
            </HeroBack>
          </HeroImage>
        </HeroImageCont>
      </HeroCont>
    </HeroSection>
  );
};

export default Hero;

import styled from "styled-components/macro";

import { Section, SectionInner } from "../../../layout/Section/Section.style";

import devices from "../../../styles/Devices";

export const HeroSection = styled(Section)`
  width: 100%;
  height: 75vh;
  position: relative;
  color: #fff;
  background-color: ${({ theme }) => theme.backgrounds.detailPage_Hero};

  @media ${devices.tablet} {
    /* height: 70vh; */
  }
`;

export const HeroSectionInner = styled(SectionInner)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HeroTitleContainer = styled.div``;

export const HeroTitle = styled.h1`
  font-size: 12rem;
  line-height: 1;
  letter-spacing: 0.1em;
  margin-bottom: 1.6rem;
  font-family: "futura_medium";
  font-weight: normal;
  text-shadow: 0 10px 30px rgb(2 11 22 / 50%);

  @media ${devices.laptop} {
    font-size: 8rem;
  }
`;

export const HeroImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 60%;
  z-index: 1;
`;

export const HeroImage = styled.img``;

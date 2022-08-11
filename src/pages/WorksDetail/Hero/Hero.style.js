import styled from "styled-components/macro";

import { Section, SectionInner } from "../../../layout/Section/Section.style";

import devices from "../../../styles/Devices";

export const HeroSection = styled(Section)`
  width: 100%;
  height: 75vh;
  position: relative;
  color: #fff;
  background-color: ${({ theme }) => theme.backgrounds.detailPage_Hero};

  @media ${devices.mobile_L} {
    height: 55vh;
  }

  @media ${devices.laptop} and (max-height: 420px) and (orientation: landscape) {
    height: 90vh;
    padding-top: 6rem;
  }
`;

export const HeroSectionInner = styled(SectionInner)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HeroTitleContainer = styled.div``;

export const HeroTitle = styled.h1`
  font-size: 10rem;
  line-height: 1;
  letter-spacing: 0.1em;
  margin-bottom: 1.6rem;
  font-family: "futura_medium";
  font-weight: normal;
  text-shadow: 0 10px 30px rgb(2 11 22 / 50%);

  @media ${devices.laptop_L} {
    font-size: 8rem;
  }

  @media ${devices.laptop} {
    font-size: 6.5rem;
  }

  @media ${devices.mobile_L} {
    font-size: 5rem;
    line-height: 1.2;
  }

  @media ${devices.laptop} and (max-height: 420px) and (orientation: landscape) {
    font-size: 4rem;
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

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 4rem;

  @media ${devices.laptop} and (max-height: 420px) and (orientation: landscape) {
    margin-top: 2rem;
  }
`;

export const GithubIcon = styled.a`
  font-size: 3rem;
  display: inline;
  transition: all 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.primary};

  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  top: ${({ top }) => (top ? top : "")};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary_Hover};
  }

  @media ${devices.tablet} {
    font-size: 3.5rem;
    text-align: center;
  }
`;

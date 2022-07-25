import styled from "styled-components/macro";

import { Section, SectionInner } from "../../layout/Section/Section.style";

import devices from "../../styles/Devices";

export const HeroSection = styled(Section)`
  width: 100%;
  height: 75vh;
  position: relative;
  color: #fff;
  background-color: ${({ theme }) => theme.backgrounds.detailPage_Hero};

  @media ${devices.tablet} {
    height: 70vh;
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

export const DescriptionSection = styled.section`
  color: #828c96;
  background-color: #fff;
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 50rem;
    background: #f2f4f5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;

    @media ${devices.mobile_L} {
      height: 60rem;
    }
  }

  & > * {
    position: relative;
    z-index: 200;
  }
`;

export const InfoContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 0 8.5% 0;
`;

export const InfoList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4rem 8rem;
  padding: 7rem 0;

  @media ${devices.laptop} {
    justify-content: center;
  }

  @media ${devices.mobile_L} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InfoTitle = styled.p`
  font-size: 2.4rem;
  color: #072142;
  letter-spacing: 0.2em;
  line-height: 1.2;
  font-family: "futura_d";
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const InfoItem = styled.li``;

export const DetailGrid = styled.div`
  position: relative;

  display: grid;
  grid-template-columns:
    [full-content-start]
    minmax(6rem, 20vw)
    [centered-content-start]
    repeat(3, 1fr)
    [centered-content-end]
    minmax(6rem, 20vw)
    [full-content-end];

  @media ${devices.laptop_L} {
    grid-template-columns:
      [full-content-start]
      minmax(3rem, 15rem)
      [centered-content-start]
      repeat(3, 1fr)
      [centered-content-end]
      minmax(3rem, 15rem)
      [full-content-end];
  }

  @media ${devices.tablet} {
    grid-template-columns:
      [full-content-start]
      0
      [centered-content-start]
      repeat(3, 1fr)
      [centered-content-end]
      0
      [full-content-end];
  }
`;

export const DetailImageContainer = styled.div`
  grid-column: centered-content-start / centered-content-end;
  padding: 7rem 0;

  @media ${devices.tablet} {
    padding: 7rem;
  }
`;

export const DetailImage = styled.img`
  border-radius: 8px;
  margin: auto;
`;

export const DetailContainer = styled.div`
  grid-column: centered-content-start / centered-content-end;
  background-color: #fff;
  margin: 4rem 0;
  display: flex;
  align-items: center;

  @media ${devices.tablet} {
    position: relative;
  }
`;

export const DetailNumber = styled.p`
  position: absolute;
  left: 0;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.secondary};
  padding-left: 6.2rem;
  font-family: "Abril Fatface";
  line-height: 1.1;

  @media ${devices.tablet} {
    top: 0;
  }

  &:after {
    content: "";
    width: 4.8rem;
    height: 2px;
    background-color: #020b16;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
`;

export const DetailWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 4rem;
  width: 100%;

  @media ${devices.tablet} {
    flex-direction: column;
    padding: 0 10%;
  }
`;

export const DetailTitle = styled.h2`
  font-size: 4rem;
  color: #072142;
  letter-spacing: 0.2em;
  padding-top: 1.2rem;
  font-family: "futura_medium";
  text-transform: uppercase;

  flex: 0 1 50%;

  @media ${devices.tablet} {
    padding-top: 0.5rem;
  }

  @media ${devices.mobile_L} {
    font-size: 3rem;
    padding-top: 0.8rem;
  }
`;

export const DetailText = styled.p`
  flex: 1;
`;

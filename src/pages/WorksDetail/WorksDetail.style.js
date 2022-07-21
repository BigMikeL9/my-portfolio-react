import styled from "styled-components/macro";

import { Section, SectionInner } from "../../layout/Section/Section.style";
import { H1 } from "../../styles/Typography.style";

export const HeroSection = styled(Section)`
  width: 100%;
  height: 80vh;
  position: relative;
  color: #fff;
  background-color: ${({ theme }) => theme.backgrounds.detailPage_Hero};
`;

export const HeroSectionInner = styled(SectionInner)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HeroTitleContainer = styled.div`
  flex: 0 1 60%;
  position: relative;
  z-index: 10;
`;

export const HeroTitle = styled.h1`
  font-size: 12rem;
  line-height: 1;
  letter-spacing: 0.1em;
  margin-bottom: 1.6rem;
  font-family: "futura_medium";
  font-weight: normal;
  text-shadow: 0 10px 30px rgb(2 11 22 / 50%);
`;

export const HeroImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 60%;
  z-index: 1;
`;

export const HeroImage = styled.img`
  /* height: 100%;
  width: 100%; */
  object-fit: cover;
`;

export const DescriptionSection = styled.section`
  color: #072142;
  background-color: #f2f4f5;
`;

export const InfoContainer = styled.div``;

export const InfoList = styled.ul``;

export const InfoItem = styled.li``;

export const DetailImageContainer = styled.div``;

export const DescriptionImageContainer = styled.div``;

export const DescriptionImage = styled.img``;

export const DescriptionDescription = styled.p``;

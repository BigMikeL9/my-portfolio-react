import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import worksData from "../../data/worksData";

import { CurtainPage } from "../../components/Curtain/Curtain.style";
import { H4 } from "../../styles/Typography.style";
import Divider from "../../components/UI/Divider/Divider";
import { AnchorTagS } from "../../components/UI/Links/Links.style";

import {
  HeroSection,
  HeroSectionInner,
  HeroTitleContainer,
  HeroTitle,
  HeroImageContainer,
  HeroImage,
  InfoContainer,
  InfoList,
  InfoItem,
  DescriptionSection,
  DescriptionImageContainer,
  DescriptionImage,
  DescriptionDescription,
} from "./WorksDetail.style";

import { Section, SectionInner } from "../../layout/Section/Section.style";

const WorkDetail = () => {
  const params = useParams();

  // -- Find current work object
  const currentWork = worksData.find(
    (currentWork) => currentWork.id === params.workId
  );

  return (
    <>
      <HeroSection>
        <HeroSectionInner>
          <HeroTitleContainer>
            <HeroTitle>{currentWork.title}</HeroTitle>
            <Divider />
            <H4>{currentWork.type}</H4>
            <AnchorTagS href={currentWork.url}>Visit Site</AnchorTagS>
          </HeroTitleContainer>

          <HeroImageContainer>
            <HeroImage src={currentWork.image} alt={currentWork.altText} />
          </HeroImageContainer>
        </HeroSectionInner>
      </HeroSection>

      <DescriptionSection>
        <InfoContainer>
          <InfoList>
            <InfoItem>
              <h6>Role</h6>
              <p>{currentWork.role}</p>
            </InfoItem>

            <InfoItem>
              <h6>Overview</h6>
              <p>{currentWork.overview}</p>
            </InfoItem>
          </InfoList>
        </InfoContainer>

        <DescriptionImageContainer>
          <DescriptionImage src={currentWork.image} alt={currentWork.altText} />
        </DescriptionImageContainer>

        <DescriptionDescription>
          {currentWork.description}
        </DescriptionDescription>
      </DescriptionSection>

      <p>{params.workId}</p>
    </>
  );
};

export default WorkDetail;

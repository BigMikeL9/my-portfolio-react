import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
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
  InfoTitle,
  DescriptionSection,
  DetailGrid,
  DetailImageContainer,
  DetailImage,
  DetailContainer,
  DetailNumber,
  DetailWrap,
  DetailTitle,
  DetailText,
} from "./WorksDetail.style";

import Stars from "../../assets/img/stars.svg";
import Lights from "../../assets/img/lights.svg";

const WorkDetail = (props) => {
  const params = useParams();

  // -----------------------------------------------------------
  const { ref, inView, entry } = useInView();

  /* -- Pass 'inView' value to Navbar thought props drilling, inorder to change color when 'WorkDetail' page's Hero section is NOT in view. 
   ⭐ Lifting state up to 'App.js' --> then passing it down to 'Header.js'  -->  then to 'NavBar.js'
  */
  const { onDetailPageHeroExitView } = props;

  useEffect(() => {
    onDetailPageHeroExitView(inView);
  }, [inView, onDetailPageHeroExitView]);
  // -----------------------------------------------------------

  // -- Find current work object
  const currentWork = worksData.find(
    (currentWork) => currentWork.id === params.workId
  );

  const workDetails = Object.entries(currentWork.details).map((detail) => {
    return {
      id: currentWork.title,
      title: detail[0],
      content: detail[1],
      image: currentWork.images[detail[0]],
    };
  });

  return (
    <>
      <HeroSection ref={ref}>
        <HeroSectionInner>
          <HeroTitleContainer>
            <HeroTitle>{currentWork.title}</HeroTitle>
            <Divider mb={"2rem"} />
            <H4>{currentWork.type}</H4>

            <AnchorTagS href={currentWork.url} target="_blank" mt={"4rem"}>
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

      <DescriptionSection>
        <InfoContainer>
          <InfoList>
            <InfoItem>
              <InfoTitle>Role</InfoTitle>
              <p>{currentWork.role}</p>
            </InfoItem>

            <InfoItem>
              <InfoTitle>Tools</InfoTitle>
              <p>{currentWork.stack}</p>
            </InfoItem>

            <InfoItem>
              <InfoTitle>Overview</InfoTitle>
              <p>{currentWork.overview}</p>
            </InfoItem>
          </InfoList>
        </InfoContainer>

        <DetailGrid>
          {workDetails.map((detail, detail_Index) => {
            return (
              <React.Fragment key={detail.title}>
                {detail.content.length > 0 && (
                  <>
                    {detail.image && (
                      <DetailImageContainer>
                        <DetailImage
                          src={detail.image}
                          alt={`${detail.title} of ${detail.id}`}
                        />
                      </DetailImageContainer>
                    )}

                    <DetailContainer>
                      <DetailNumber>
                        {(detail_Index + 1).toLocaleString("en-US", {
                          minimumIntegerDigits: 2,
                          useGrouping: false,
                        })}
                      </DetailNumber>

                      <DetailWrap>
                        <DetailTitle>{detail.title}</DetailTitle>
                        <DetailText>{detail.content}</DetailText>
                      </DetailWrap>
                    </DetailContainer>
                  </>
                )}
              </React.Fragment>
            );
          })}
        </DetailGrid>
      </DescriptionSection>
    </>
  );
};

export default WorkDetail;

import React from "react";
import Atropos from "atropos/react";
import { useInView } from "react-intersection-observer";

import {
  WorksItemS,
  WorksDescription,
  WorksImageContainer,
  WorksImage,
  GlowWrap,
  WorksStack,
} from "../WorksItem/WorksItem.style";

import { H3 } from "../../../../styles/Typography.style";
import { VisitLinkR } from "../../../../components/UI/Links/Links.style";

const RandomlinkTextArr = [
  "Scout",
  "Show me more",
  "Check Out",
  "I want More",
  "Explore",
  "Why Not!",
];

const WorksItem = (props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.8,
  });

  // const RandomButtonText =
  //   RandomlinkTextArr[Math.floor(Math.random() * RandomlinkTextArr.length + 1)];

  return (
    <WorksItemS id={props.id} ref={ref} inView={inView}>
      <Atropos className="my-atropos" rotateXMax={3} rotateYMax={3}>
        <WorksImageContainer>
          <a
            href={props.url}
            aria-label={`Go to ${props.title} Website`}
            target="_blank"
            rel="noreferrer"
          >
            <WorksImage src={props.image_Main} alt={props.alt} />
            <GlowWrap />
          </a>
        </WorksImageContainer>
      </Atropos>

      <WorksDescription>
        <H3>{props.title}</H3>

        <WorksStack>{props.stack}</WorksStack>

        <VisitLinkR to={`/works-detail/${props.id}`} mt={"2rem}"}>
          Show Me More
        </VisitLinkR>
      </WorksDescription>
    </WorksItemS>
  );
};

export default WorksItem;

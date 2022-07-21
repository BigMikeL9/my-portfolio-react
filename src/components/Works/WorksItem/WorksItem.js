import React from "react";
import Atropos from "atropos/react";

import {
  WorksItemS,
  WorksDescription,
  WorksImageContainer,
  WorksImage,
  GlowWrap,
  WorksStack,
} from "../WorksItem/WorksItem.style";

import { H3 } from "../../../styles/Typography.style";
import { VisitLinkR } from "../../UI/Links/Links.style";

const WorksItem = (props) => {
  return (
    <WorksItemS id={props.id}>
      <Atropos className="my-atropos" rotateXMax={3} rotateYMax={3}>
        <WorksImageContainer>
          <a
            href={props.url}
            aria-label={`Go to ${props.title} Website`}
            target="_blank"
            rel="noreferrer"
          >
            <WorksImage src={props.image} alt={props.alt} />
            <GlowWrap />
          </a>
        </WorksImageContainer>
      </Atropos>

      <WorksDescription>
        <H3>{props.title}</H3>

        <WorksStack>{props.stack}</WorksStack>

        <VisitLinkR to={`/works-detail/${props.id}`}>Show me more</VisitLinkR>
      </WorksDescription>
    </WorksItemS>
  );
};

export default WorksItem;

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
import { VisitLink } from "../../UI/VisitLink/VisitLink";

const WorksItem = (props) => {
  console.log(props);
  return (
    <WorksItemS>
      <Atropos className="my-atropos" rotateXMax={5} rotateYMax={5}>
        <WorksImageContainer>
          <WorksImage src={props.image} alt={props.alt} />
          <GlowWrap />
        </WorksImageContainer>
      </Atropos>

      <WorksDescription>
        <H3>{props.title}</H3>

        <WorksStack>{props.stack}</WorksStack>

        <VisitLink to="/">Show me more</VisitLink>
      </WorksDescription>
    </WorksItemS>
  );
};

export default WorksItem;

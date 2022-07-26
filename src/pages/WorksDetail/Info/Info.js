import React from "react";

import { InfoContainer, InfoList, InfoItem, InfoTitle } from "./Info.style";

const Info = (props) => {
  return (
    <InfoContainer>
      <InfoList>
        <InfoItem>
          <InfoTitle>Role</InfoTitle>
          <p>{props.currentWork.role}</p>
        </InfoItem>

        <InfoItem>
          <InfoTitle>Tools</InfoTitle>
          <p>{props.currentWork.stack}</p>
        </InfoItem>

        <InfoItem>
          <InfoTitle>Overview</InfoTitle>
          <p>{props.currentWork.overview}</p>
        </InfoItem>
      </InfoList>
    </InfoContainer>
  );
};

export default Info;

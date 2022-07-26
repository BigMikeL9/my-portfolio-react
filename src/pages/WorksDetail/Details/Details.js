import React from "react";

import {
  DetailGrid,
  DetailImageContainer,
  DetailImage,
  DetailContainer,
  DetailNumber,
  DetailWrap,
  DetailTitle,
  DetailText,
} from "./Details.style";

const Details = (props) => {
  return (
    <DetailGrid>
      {props.workDetails.map((detail, detail_Index) => {
        return (
          <React.Fragment key={detail.title}>
            {detail.image && (
              <DetailImageContainer>
                <DetailImage
                  src={detail.image}
                  alt={`${detail.title} of ${detail.id}`}
                />
              </DetailImageContainer>
            )}

            {detail.content && (
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
            )}
          </React.Fragment>
        );
      })}
    </DetailGrid>
  );
};

export default Details;

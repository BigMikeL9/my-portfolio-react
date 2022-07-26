import React from "react";

import worksData from "../../../../data/worksData";
import WorkItem from "../WorksItem/WorksItem";

import { WorksListS } from "./WorksList.style";

const WorksList = () => {
  return (
    <WorksListS>
      {worksData.map((data) => (
        <WorkItem
          key={data.id}
          id={data.id}
          image_Main={data.images.overview}
          alt={data.altText}
          title={data.title}
          stack={data.stack}
          url={data.url}
        />
      ))}
    </WorksListS>
  );
};

export default WorksList;

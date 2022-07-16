import React from "react";

import { WorksListS } from "./WorksList.style";
import worksData from "../../../data/WorksData";
import WorkItem from "../WorksItem/WorksItem";

const WorksList = () => {
  return (
    <WorksListS>
      {worksData.map((data) => {
        <WorkItem
          key={data.id}
          id={data.id}
          image={data.image}
          title={data.title}
          stack={data.stack}
          description={data.description}
          url={data.url}
        />;
      })}
    </WorksListS>
  );
};

export default WorksList;

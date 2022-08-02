import styled from "styled-components";

import devices from "../../../../styles/Devices";

export const WorksListS = styled.ul`
  margin-top: 4rem;

  & > *:not(:last-child) {
    margin-bottom: 16rem;

    @media ${devices.mobile_L} {
      margin-bottom: 8rem;
    }
  }
`;

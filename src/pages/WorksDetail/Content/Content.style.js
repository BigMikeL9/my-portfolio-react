import styled from "styled-components/macro";

import devices from "../../../styles/Devices";

export const DescriptionSection = styled.section`
  color: #828c96;
  background-color: #fff;
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 50rem;
    background: #f2f4f5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;

    @media ${devices.mobile_L} {
      height: 60rem;
    }
  }

  & > * {
    position: relative;
    z-index: 200;
  }
`;

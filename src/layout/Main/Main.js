import React from "react";
import styled from "styled-components/macro";
import device from "../../styles/Devices";

export const MainGrid = styled.main`
  display: grid;

  grid-template-columns:
    [full-content-start]
    minmax(12rem, 1fr)
    [centered-content-start] repeat(
      4,
      [column-start] minmax(min-content, 14rem) [column-end]
    )
    [centered-content-end]
    minmax(12rem, 1fr)
    [full-content-end];

  // --------
  @media only screen and (${device.tablet_Land}) {
    grid-template-columns:
      [full-content-start]
      minmax(8rem, 1fr)
      [centered-content-start] repeat(
        4,
        [column-start] minmax(min-content, 14rem) [column-end]
      )
      [centered-content-end]
      minmax(8rem, 1fr)
      [full-content-end];
  }

  // --------
  @media only screen and (${device.mobile_L}) {
    grid-template-columns:
      [full-content-start]
      minmax(4rem, 1fr)
      [centered-content-start] repeat(
        4,
        [column-start] minmax(min-content, 14rem) [column-end]
      )
      [centered-content-end]
      minmax(4rem, 1fr)
      [full-content-end];
  }
`;

const Main = (props) => {
  return <MainGrid>{props.children}</MainGrid>;
};

export default Main;

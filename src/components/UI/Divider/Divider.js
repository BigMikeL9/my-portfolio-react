import React from "react";
import styled from "styled-components/macro";
import devices from "../../../styles/Devices";

const DividerS = styled.div`
  display: inline-block;
  margin-bottom: 3.2rem;

  span {
    display: block;
    width: 88px;
    height: 4px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.secondary};

    @media ${devices.tablet} {
      width: 70px;
    }

    @media ${devices.mobile_M} {
      width: 44px;
      height: 2px;
    }
  }

  span:first-child {
    margin-bottom: 1.4rem;

    @media ${devices.mobile_M} {
      margin-bottom: 7px;
    }
  }

  span:last-child {
    margin-left: 54px;

    @media ${devices.mobile_M} {
      margin-left: 27px;
    }
  }

  @media ${devices.mobile_M} {
    margin-bottom: 8px;
  }
`;

const Divider = () => {
  return (
    <DividerS>
      <span />
      <span />
    </DividerS>
  );
};

export default Divider;

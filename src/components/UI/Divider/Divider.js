import React from "react";
import styled from "styled-components";

export const DividerS = styled.div`
  display: inline-block;
  margin-bottom: 3.2rem;

  span {
    display: block;
    width: 88px;
    height: 4px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:first-child {
    margin-bottom: 1.4rem;
  }

  &:last-child {
    margin-left: 54px;
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

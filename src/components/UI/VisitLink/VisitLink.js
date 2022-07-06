import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const VisitLink = styled(Link)`
  font-size: 1rem;
  padding: 3px 10px;
  border-radius: 15px;
  letter-spacing: 1.6px;
  margin-top: ${({ mt }) => (mt ? mt : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};

  /* UNFINISHED */
`;

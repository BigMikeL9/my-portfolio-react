import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import devices from "../../../styles/Devices";

export const AnchorTagS = styled.a`
  display: inline-block;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.secondary};
  line-height: 1;
  font-weight: bold;
  padding: 1.4rem 2.8rem;
  border-radius: 50px;
  transition: 0.3s;
  letter-spacing: 0.1em;

  margin-top: ${({ mt }) => (mt ? mt : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};

  @media ${devices.mobile_L} {
    padding: 10px 18px;
  }

  &:hover,
  &:focus {
    transform: translate3d(0, -5%, 0);
    background-color: ${({ theme }) => theme.colors.secondary_Hover};
  }
`;

// -- React Router styled link
export const VisitLinkR = styled(Link)`
  display: inline-block;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.secondary};
  line-height: 1;
  font-weight: bold;
  padding: 1.2rem 2.6rem;
  border-radius: 50px;
  transition: 0.3s;
  letter-spacing: 0.1em;

  margin-top: ${({ mt }) => (mt ? mt : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};

  @media ${devices.mobile_L} {
    padding: 10px 18px;
  }

  &:hover,
  &:focus {
    transform: translate3d(0, -5%, 0);
    background-color: ${({ theme }) => theme.colors.secondary_Hover};
  }
`;

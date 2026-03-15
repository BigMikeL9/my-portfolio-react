import styled from "styled-components/macro";

import devices from "../../../styles/Devices";

export const InfoContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 6% 0;
`;

export const InfoList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4rem 8rem;
  padding: 7rem 0;
  

  & > :nth-child(2) {
    max-width: 32rem;
  }

  & > :last-child {
    flex: 1;
  }

  @media ${devices.laptop} {
    flex-direction: column;
    align-items: flex-start;
  }

  @media ${devices.mobile_L} {
  }
`;

export const InfoTitle = styled.p`
  font-size: 2.4rem;
  color: #072142;
  letter-spacing: 0.2em;
  line-height: 1.2;
  font-family: "futura_d";
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const InfoItem = styled.li``;

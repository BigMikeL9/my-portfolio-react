import styled from "styled-components/macro";

import devices from "../../../styles/Devices";

export const InfoContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 0 8.5% 0;
`;

export const InfoList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4rem 8rem;
  padding: 7rem 0;

  @media ${devices.laptop} {
    justify-content: center;
  }

  @media ${devices.mobile_L} {
    flex-direction: column;
    align-items: flex-start;
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

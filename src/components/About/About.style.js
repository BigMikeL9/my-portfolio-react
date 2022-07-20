import styled from "styled-components/macro";

import { Section } from "../../layout/Section/Section.style";

export const AboutSection = styled(Section)`
  width: 100%;
  padding-top: 10rem;
  background-image: ${({ theme }) => theme.backgrounds.about};

  min-height: 100vh;
`;

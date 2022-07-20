import styled from "styled-components";
import devices from "../../styles/Devices";

export const Section = styled.section`
  display: grid;

  grid-template-columns:
    [full-content-start]
    minmax(6rem, 14rem)
    [centered-content-start] repeat(4, [column-start] 1fr [column-end])
    [centered-content-end]
    minmax(6rem, 14rem)
    [full-content-end];

  // --------
  @media ${devices.laptop} {
    grid-template-columns:
      [full-content-start]
      minmax(3rem, 5rem)
      [centered-content-start] repeat(4, [column-start] 1fr [column-end])
      [centered-content-end]
      minmax(3rem, 5rem)
      [full-content-end];
  }
`;

export const SectionInner = styled.div`
  transition: all 0.3s;
  grid-column: centered-content-start / centered-content-end;
`;

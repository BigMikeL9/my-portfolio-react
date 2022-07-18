import styled from "styled-components/macro";
import devices from "../../styles/Devices";
import { motion } from "framer-motion";

export const GridLayoutS = styled(motion.div)`
  display: grid;
  transition: all 0.3s;

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
      [centered-content-start] repeat(
        4,
        [column-start] minmax(min-content, 14rem) [column-end]
      )
      [centered-content-end]
      minmax(3rem, 5rem)
      [full-content-end];
  }

  // --------
  @media ${devices.mobile_L} {
    grid-template-columns:
      [full-content-start]
      minmax(2rem, 3rem)
      [centered-content-start] repeat(
        4,
        [column-start] minmax(min-content, 14rem) [column-end]
      )
      [centered-content-end]
      minmax(2rem, 3rem)
      [full-content-end];
  }
`;

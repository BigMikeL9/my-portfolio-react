import styled from "styled-components";

import { Link as LinkS } from "react-scroll";

export const NavDrawer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
  transform: ${({ isOpen }) => (isOpen ? "translate(0)" : "translate(110%)")};
  height: 100%;
  width: 40rem;
  max-width: 55rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 2rem 0 0 2rem;
  box-shadow: 0 0 3rem rgba(255, 255, 255, 0.5);
  background-image: linear-gradient(
    to bottom right,
    #072142,
    #8c2b7a 42%,
    #ff4d5a
  );
  backdrop-filter: saturate(180%) blur(2rem);
  transition: all 0.5s cubic-bezier(0.88, 0.03, 0.13, 1.01);
`;

export const NavMenu = styled.div``;

export const NavList = styled.ul``;

export const NavItem = styled.li``;

export const NavLinkS = styled(LinkS)``;

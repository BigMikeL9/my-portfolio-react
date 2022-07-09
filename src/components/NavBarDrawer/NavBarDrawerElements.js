import styled from "styled-components";

import { Link as LinkS } from "react-scroll";

export const NavDrawer = styled.div`
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  backdrop-filter: blur(4px);
  background-color: hsla(0, 0%, 5%, 0.4);
  cursor: pointer;
`;

export const NavDrawerContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(110%)")};
  height: 100%;
  /* max-width: 80vw; */

  padding: 8rem;
  border-radius: 2rem 0 0 2rem;
  box-shadow: 0 0 3rem rgba(255, 255, 255, 0.5);
  background-image: linear-gradient(
    to bottom right,
    #072142,
    #8c2b7a 42%,
    #ff4d5a
  );
  /* backdrop-filter: saturate(180%) blur(20px); */
  transition: all 0.5s cubic-bezier(0.88, 0.03, 0.13, 1.01);

  @media only screen and (max-width: 48em) {
    width: 100%;
    text-align: center;
    border-radius: unset;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
  }
`;

export const NavList = styled.ul`
  margin-top: 12rem;
  height: 100%;

  & > *:not(:first-child) {
    padding-top: 6rem;
  }
`;

export const NavItem = styled.li`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const NavLinkS = styled(LinkS)`
  display: inline-block;
  text-transform: uppercase;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;
  letter-spacing: 8px;
  text-shadow: 0 10px 30px rgb(2 11 22 / 20%);
  transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.3s;
  position: relative;

  transform: ${({ isOpen }) =>
    isOpen ? "translate3d(0, 0, 0)" : "translate3d(0, 100%, 0)"};

  &:after {
    content: "";
    position: absolute;
    top: 40%;
    left: 0;
    transform: translateY(-50%);
    width: 0;
    height: 5px;
    background-color: currentColor;
    box-shadow: 0 10px 30px rgb(2 11 22 / 20%);
    transition: 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  }

  &:hover:after,
  &:focus:after,
  &.active:after {
    width: 100%;
  }
`;

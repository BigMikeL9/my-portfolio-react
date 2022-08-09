import styled from "styled-components/macro";

// import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";

import devices from "../../../styles/Devices";

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

export const NavDrawerContainer = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(110%)")};
  color: ${({ theme }) => theme.colors.primary};
  height: 100%;
  min-width: 60rem;

  padding: 8rem;
  border-radius: 2rem 0 0 2rem;
  box-shadow: 0 0 3rem rgba(255, 255, 255, 0.5);
  background-image: linear-gradient(
    to bottom right,
    #072142,
    #8c2b7a 42%,
    #ff4d5a
  );

  transition: all 0.5s cubic-bezier(0.88, 0.03, 0.13, 1.01);

  @media ${devices.tablet} {
    min-width: unset;
    width: 100%;
    height: 100vh;

    left: 0;
    bottom: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: unset;
    background-image: linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a);
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
  }
`;

export const NavList = styled.ul`
  margin-top: 12rem;

  & > *:not(:first-child) {
    padding-top: 6rem;

    /* @media (orientation: landscape) {
      padding-top: 3rem;
    } */
  }

  & > *:last-child {
    display: none;
  }

  @media ${devices.tablet} {
    text-align: center;
    margin-top: unset;

    & > *:last-child {
      display: flex;
    }
  }
`;

export const NavItem = styled.li`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  & > * {
    transform: ${({ isOpen }) =>
      isOpen ? "translate3d(0, 0, 0)" : "translate3d(0, 100%, 0)"};
  }
`;

export const NavLinkS = styled(Link)`
  font-family: "futura_medium";
  display: inline-block;
  text-transform: uppercase;
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;
  letter-spacing: 8px;
  text-shadow: 0 10px 30px rgb(2 11 22 / 20%);
  transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;

  position: relative;

  @media ${devices.tablet} {
    font-size: 7.6rem;
  }

  @media ${devices.mobile_M} {
    font-size: 5rem;
    text-shadow: 0 3px 20px rgb(2 11 22 / 20%);
  }

  /* @media (orientation: landscape) {
    font-size: 3rem;
  } */

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

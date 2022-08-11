import styled from "styled-components/macro";
import { Link as LinkR } from "react-router-dom";
import BackButton from "../../../components/BackButton/BackButton";

import Button from "../../../components/UI/Button/Button";

import devices from "../../../styles/Devices";

export const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  padding: 4rem 4rem 0;
  z-index: 3000;

  /* -- If detail page is mounted && Detail page - hero section is not inView && Navbar is not open -->  set nav color to dark blue else to white */
  color: ${({ theme, detailPageMounted, detailPageHeroInView, isOpen }) =>
    detailPageMounted && !detailPageHeroInView && !isOpen
      ? "#020b16"
      : theme.colors.primary};
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000;
`;

export const NavLogo = styled(LinkR)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: max(14px, 2rem);
  letter-spacing: 6.5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary_Hover};
  }
`;

export const BackButtonS = styled(BackButton)`
  position: fixed;
  top: 12rem;
  left: 4rem;
  display: block;
  width: 6.4rem;
  overflow: hidden;
  color: #fff;
  z-index: 300;
  transition: all 0.3s;

  @media ${devices.mobile_L} {
    top: 10rem;
    width: 5rem;
  }

  // 280px
  @media only screen and (max-width: 17.5em) {
    top: 9rem;
  }

  @media ${devices.laptop} and (max-height: 420px) and (orientation: landscape) {
    top: 7rem;
    width: 4rem;
  }

  /* transition-delay: ${({ isHomepage, detailPageMounted }) =>
    isHomepage ? "0s" : "0.5s"}; */
  opacity: ${({ detailPageMounted }) =>
    detailPageMounted && detailPageMounted ? "1" : "0"};
  visibility: ${({ detailPageMounted }) =>
    detailPageMounted && detailPageMounted ? "visible" : "hidden"};

  &:hover,
  &:focus {
    transform: translate3d(-15%, 0, 0);
  }
`;

export const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${devices.tablet} {
    & > *:first-child {
      display: none;
    }
  }
`;

export const MenuIcon = styled(Button)`
  position: relative;
  width: 50px;
  height: 22px;
  cursor: pointer;
  background: none;
  border: none;
  color: inherit;

  @media ${devices.mobile_L} {
    width: 25px;
    height: 15px;
  }

  &:hover {
  }

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.primary_Hover};
  }

  &:before,
  &:after {
    content: "";
    width: 100%;
    height: 3px;
    background-color: currentColor;
    position: absolute;
    right: 0;
    transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);

    @media ${devices.mobile_L} {
      height: 2px;
    }
  }

  &:before {
    bottom: ${({ isOpen }) => (isOpen ? "50%" : "0")};
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg) translate3d(0, 50%, 0)" : ""};
  }

  &:after {
    top: ${({ isOpen }) => (isOpen ? "50%" : "0")};
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg) translate3d(0, -50%, 0)" : ""};
  }
`;

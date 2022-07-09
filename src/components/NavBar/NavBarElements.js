import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import Button from "../UI/Button/Button";

export const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  padding: 4rem 4rem 0;
  z-index: 1000;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled(LinkR)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: max(14px, 2.4rem);
  letter-spacing: 6.5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary_Hover};
  }
`;

export const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavIcons = styled.div`
  display: flex;
  gap: 0 3rem;
  margin-right: 6.4rem;
`;

export const NavIcon = styled.a`
  font-size: 2.4rem;
  display: inline-block;
  transition: all 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.primary};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary_Hover};
  }
`;

export const MenuIcon = styled(Button)`
  position: relative;
  width: 50px;
  height: 22px;
  cursor: pointer;
  background: none;
  border: none;
  color: ${({ isOpen, theme }) =>
    isOpen ? theme.colors.primary : theme.colors.secondary};

  @media only screen and (max-width: 48em) {
    width: 25px;
    height: 15px;
  }

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.secondary_Hover};
  }

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.primary};
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

    @media only screen and (max-width: 48em) {
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

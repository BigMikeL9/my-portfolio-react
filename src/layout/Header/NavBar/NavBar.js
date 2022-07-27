import React, { useRef } from "react";

import NavBarDrawer from "../NavBarDrawer/NavBarDrawer";

import SocialIcons from "../../../components/SocialIcons/SocialIcons";

import { NavContainer, Nav, NavLogo, NavWrap, MenuIcon } from "./NavBar.style";

const NavBar = (props) => {
  const navLogoHandler = (event) => {
    event.target.blur();
  };

  const menuIconHandler = (event) => {
    props.onToggleMenu();
    event.target.blur();
  };

  return (
    <>
      <NavContainer
        detailPageMounted={props.detailPageMounted}
        detailPageHeroInView={props.detailPageHeroInView}
        isOpen={props.isOpen}
      >
        <Nav>
          <NavLogo to="/" onClick={navLogoHandler}>
            Mikel Kamel
          </NavLogo>

          <NavWrap>
            <SocialIcons />

            <MenuIcon
              onClick={menuIconHandler}
              isOpen={props.isOpen}
              aria-label="Menu"
            />
          </NavWrap>
        </Nav>
        <NavBarDrawer isOpen={props.isOpen} onClose={props.onClose} />
      </NavContainer>
    </>
  );
};

export default NavBar;

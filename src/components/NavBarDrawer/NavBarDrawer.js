import React from "react";

import { navBarData as data } from "../../data/NavBarData";

import {
  Backdrop,
  NavDrawer,
  NavDrawerContainer,
  NavList,
  NavItem,
  NavLinkS,
} from "./NavBarDrawer.style";

const NavBarDrawer = (props) => {
  return (
    <>
      <NavDrawer isOpen={props.isOpen}>
        <Backdrop onClick={props.onClose} />
        <NavDrawerContainer isOpen={props.isOpen}>
          <NavList>
            {data.map((el) => (
              <NavItem key={el.to}>
                <NavLinkS
                  hashSpy={true}
                  spy={true}
                  smooth={true}
                  // offset={50}
                  duration={100}
                  to={el.to}
                  isOpen={props.isOpen}
                  onClick={props.onClose}
                >
                  {el.text}
                </NavLinkS>
              </NavItem>
            ))}
          </NavList>
        </NavDrawerContainer>
      </NavDrawer>
    </>
  );
};

export default NavBarDrawer;

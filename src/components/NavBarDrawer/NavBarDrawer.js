import React from "react";

import {
  NavDrawer,
  NavMenu,
  NavList,
  NavItem,
  NavLinkS,
} from "./NavBarDrawerElements";

const NavBarDrawer = (props) => {
  return (
    <NavDrawer isOpen={props.isOpen}>
      <NavMenu></NavMenu>
    </NavDrawer>
  );
};

export default NavBarDrawer;

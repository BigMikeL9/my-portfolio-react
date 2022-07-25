import NavBarDrawer from "../NavBarDrawer/NavBarDrawer";

import SocialIcons from "../SocialIcons/SocialIcons";

import { NavContainer, Nav, NavLogo, NavWrap, MenuIcon } from "./NavBar.style";

const NavBar = (props) => {
  return (
    <>
      <NavContainer detailPageHeroInView={props.detailPageHeroInView}>
        <Nav>
          <NavLogo to="/">Mikel Kamel</NavLogo>

          <NavWrap>
            <SocialIcons />

            <MenuIcon
              onClick={props.onToggleMenu}
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

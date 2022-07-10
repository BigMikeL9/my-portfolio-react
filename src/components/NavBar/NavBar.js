import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { FaItchIo } from "react-icons/fa";

import NavBarDrawer from "../NavBarDrawer/NavBarDrawer";

import {
  NavContainer,
  Nav,
  NavLogo,
  NavWrap,
  NavIcons,
  NavIcon,
  MenuIcon,
} from "./NavBar.style";

const NavBar = (props) => {
  return (
    <>
      <NavContainer>
        <Nav>
          <NavLogo to="/">Mikel Kamel</NavLogo>

          <NavWrap>
            <NavIcons>
              <NavIcon
                href="https://www.linkedin.com/in/mikel-kamel-65502b209/"
                target="_blank"
              >
                <RiLinkedinFill />
              </NavIcon>
              <NavIcon href="https://github.com/BigMikeL9" target="_blank">
                <AiFillGithub />
              </NavIcon>
              <NavIcon href="https://mikejam.itch.io/" target="_blank">
                <FaItchIo />
              </NavIcon>
            </NavIcons>

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

import { useSelector, useDispatch } from "react-redux/es/exports";
import disableScroll from "disable-scroll";

import NavBarDrawer from "../NavBarDrawer/NavBarDrawer";
import SocialIcons from "../../../components/SocialIcons/SocialIcons";
import { NavContainer, Nav, NavLogo, NavWrap, MenuIcon } from "./NavBar.style";

import { navActions } from "../../../store/navSlice";

const NavBar = (props) => {
  const dispatch = useDispatch();

  // -- Redux store
  const navStore = useSelector((state) => state.nav);
  const { isOpen } = navStore;

  // console.log("Nav Menu is Open: ", isOpen);

  const navLogoHandler = (event) => {
    event.target.blur();
  };

  const menuIconHandler = (event) => {
    event.target.blur();
    dispatch(navActions.toggleMenu());
    !isOpen ? disableScroll.on() : disableScroll.off();
  };

  return (
    <>
      <NavContainer
        detailPageMounted={props.detailPageMounted}
        detailPageHeroInView={props.detailPageHeroInView}
        isOpen={isOpen}
      >
        <Nav>
          <NavLogo to="/" onClick={navLogoHandler}>
            Mikel Kamel
          </NavLogo>

          <NavWrap>
            <SocialIcons />

            <MenuIcon
              onClick={menuIconHandler}
              isOpen={isOpen}
              aria-label="Menu"
            />
          </NavWrap>
        </Nav>

        <NavBarDrawer />
      </NavContainer>
    </>
  );
};

export default NavBar;

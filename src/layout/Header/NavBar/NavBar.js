import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useLocation } from "react-router-dom";

import disableScroll from "disable-scroll";

import NavBarDrawer from "../NavBarDrawer/NavBarDrawer";
import SocialIcons from "../../../components/SocialIcons/SocialIcons";
import {
  NavContainer,
  Nav,
  NavLogo,
  NavWrap,
  MenuIcon,
  BackButtonS,
} from "./NavBar.style";
import { ReactComponent as BackSVG } from "../../../assets/img/back.svg";

import { navActions } from "../../../store/navSlice";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navLogoRef = useRef();

  // -- to show/hide back button and navigate to workItem on back
  const currentWorkId = location.pathname.replace("/works/", "");
  const isHomePage = location.pathname === "/";

  // -- Redux store
  const navStore = useSelector((state) => state.nav);
  const { isOpen } = navStore;

  const navLogoHandler = () => {
    navLogoRef.current.blur();
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
          <NavLogo to="/" onClick={navLogoHandler} ref={navLogoRef}>
            Mikel Kamel
          </NavLogo>

          <BackButtonS
            to="/"
            currentWorkId={currentWorkId}
            isHomepage={isHomePage}
            detailPageMounted={props.detailPageMounted}
            detailPageHeroInView={props.detailPageHeroInView}
          >
            <BackSVG />
          </BackButtonS>

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

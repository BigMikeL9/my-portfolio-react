import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import disableScroll from "disable-scroll";

import { navBarData as navData } from "../../../data/navBarData";
import SocialIcons from "../../../components/SocialIcons/SocialIcons";

import { navActions } from "../../../store/navSlice";

import {
  Backdrop,
  NavDrawer,
  NavDrawerContainer,
  NavList,
  NavItem,
  NavLinkS,
} from "./NavBarDrawer.style";

const NavBarDrawer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // -------------------
  // --- Redux Store
  const navStore = useSelector((state) => state.nav);
  const { isOpen } = navStore;

  // -------------------
  const isHomePage = location.pathname === "/";

  // -------------------

  const closeMenuHandler = () => {
    dispatch(navActions.closeMenu());
    disableScroll.off();
  };

  // -------------------
  const navLinkHandler = (event) => {
    dispatch(navActions.closeMenu());
    disableScroll.off();

    // -- If current page is NOT homepage,
    if (!isHomePage) {
      // -- Go to Homepage
      navigate("/", { replace: true });

      const runLater = setTimeout(() => {
        // -- Then scroll to element with hash
        const scrollToSection = document.getElementById(
          `${event.target.dataset.hash}`
        );

        scrollToSection.scrollIntoView({ behavior: "instant" });

        // console.log(scrollToSection);
      }, 1200);
    }
  };

  // -------------------
  return (
    <>
      <NavDrawer isOpen={isOpen}>
        <Backdrop onClick={closeMenuHandler} />
        <NavDrawerContainer isOpen={isOpen}>
          <NavList>
            {navData.map((data) => (
              <NavItem key={data.to} isOpen={isOpen}>
                <NavLinkS
                  to={data.to}
                  data-hash={data.to}
                  onClick={navLinkHandler}
                  smooth={true}
                  duration={500}
                  // spy={isHomePage ? true : false}
                  // hashSpy={isHomePage ? true : false}
                  // offset={50}
                  // delay={1000}
                  // isDynamic={true}
                  // onSetActive={this.handleSetActive}
                  // onSetInactive={this.handleSetInactive}
                  // ignoreCancelEvents={false}
                  spyThrottle={500}
                >
                  {data.text}
                </NavLinkS>
              </NavItem>
            ))}

            <SocialIcons isOpen={isOpen} />
          </NavList>
        </NavDrawerContainer>
      </NavDrawer>
    </>
  );
};

export default NavBarDrawer;

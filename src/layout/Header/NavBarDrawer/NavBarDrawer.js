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

  const navStore = useSelector((state) => state.nav);
  const { isOpen } = navStore;

  const closeMenuHandler = () => {
    dispatch(navActions.closeMenu());
    disableScroll.off();
  };

  const navLinkHandler = (event) => {
    dispatch(navActions.closeMenu());
    disableScroll.off();

    // -- If current page doesn't have element with navLink hash, go to Homepage --> then scroll to element with hash
    if (location.pathname !== "/") {
      navigate("/", { replace: true });

      setTimeout(() => {
        const scrollToSection = document.getElementById(
          `${event.target.dataset.hash}`
        );

        scrollToSection.scrollIntoView({ behavior: "smooth" });

        // console.log(scrollToSection);
      }, 1200);
    }
  };

  return (
    <>
      <NavDrawer isOpen={isOpen}>
        <Backdrop onClick={closeMenuHandler} />
        <NavDrawerContainer isOpen={isOpen}>
          <NavList>
            {navData.map((data) => (
              <NavItem key={data.to} isOpen={isOpen}>
                <NavLinkS
                  // smooth
                  // scroll={(el) =>
                  //   setTimeout(
                  //     () => el.scrollIntoView({ behavior: "smooth" }),
                  //     location.pathname.includes("works-detail") ? 500 : 0
                  //   )
                  // }
                  // to={data.to}
                  // onClick={closeMenuHandler}
                  // className={`/${location.hash}` === data.to ? "active" : ""}

                  to={data.to}
                  data-hash={data.to}
                  onClick={navLinkHandler}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  // offset={50}
                  duration={0}
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

import { useLocation } from "react-router-dom";
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
  HashLinkS,
} from "./NavBarDrawer.style";

const NavBarDrawer = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const navStore = useSelector((state) => state.nav);
  const { isOpen } = navStore;

  const closeMenuHandler = () => {
    dispatch(navActions.closeMenu());
    disableScroll.off();
  };

  // BUG  --> solve later: DELAY scroll when hoing from one page to another. Or just use 'react-scroll' package instead of 'reduc-hash-link' package

  return (
    <>
      <NavDrawer isOpen={isOpen}>
        <Backdrop onClick={closeMenuHandler} />
        <NavDrawerContainer isOpen={isOpen}>
          <NavList>
            {navData.map((data) => (
              <NavItem key={data.to} isOpen={isOpen}>
                <HashLinkS
                  smooth
                  // scroll={(el) =>
                  //   setTimeout(
                  //     () => el.scrollIntoView({ behavior: "smooth" }),
                  //     location.pathname.includes("works-detail") ? 500 : 0
                  //   )
                  // }
                  to={data.to}
                  onClick={closeMenuHandler}
                  className={`/${location.hash}` === data.to ? "active" : ""}
                >
                  {data.text}
                </HashLinkS>
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

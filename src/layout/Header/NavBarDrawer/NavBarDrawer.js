import React from "react";
import { useLocation } from "react-router-dom";

import { navBarData as navData } from "../../../data/navBarData";
import SocialIcons from "../../../components/SocialIcons/SocialIcons";

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

  return (
    <>
      <NavDrawer isOpen={props.isOpen}>
        <Backdrop onClick={props.onClose} />
        <NavDrawerContainer isOpen={props.isOpen}>
          <NavList>
            {navData.map((data) => (
              <NavItem key={data.to} isOpen={props.isOpen}>
                <HashLinkS
                  smooth
                  scroll={(el) =>
                    setTimeout(
                      () => el.scrollIntoView({ behavior: "smooth" }),
                      location.pathname.includes("works-detail") ? 500 : 0
                    )
                  }
                  to={data.to}
                  onClick={props.onClose}
                  className={`/${location.hash}` === data.to ? "active" : ""}
                >
                  {data.text}
                </HashLinkS>
              </NavItem>
            ))}

            <SocialIcons isOpen={props.isOpen} />
          </NavList>
        </NavDrawerContainer>
      </NavDrawer>
    </>
  );
};

export default NavBarDrawer;

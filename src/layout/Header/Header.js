import React, { useState } from "react";
import disableScroll from "disable-scroll";

import NavBar from "./NavBar/NavBar";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggleHandler = () => {
    setIsOpen((previousState) => {
      // toggle scrolling
      !previousState ? disableScroll.on() : disableScroll.off();

      return !previousState;
    });
  };

  const closeMenuHandler = () => {
    setIsOpen(false);
    disableScroll.off(); // re-enable scroll
  };

  return (
    <>
      <NavBar
        detailPageMounted={props.detailPageMounted}
        detailPageHeroInView={props.detailPageHeroInView}
        isOpen={isOpen}
        onToggleMenu={menuToggleHandler}
        onClose={closeMenuHandler}
      />
    </>
  );
};

export default Header;

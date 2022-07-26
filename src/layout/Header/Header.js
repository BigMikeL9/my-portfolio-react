import React, { useState } from "react";

import NavBar from "./NavBar/NavBar";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggleHandler = () => {
    setIsOpen((previousState) => !previousState);
  };

  const closeMenuHandler = () => {
    setIsOpen(false);
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

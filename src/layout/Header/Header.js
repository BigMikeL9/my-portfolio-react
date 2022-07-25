import React, { useState } from "react";

import NavBar from "../../components/NavBar/NavBar";

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
        detailPageHeroInView={props.detailPageHeroInView}
        isOpen={isOpen}
        onToggleMenu={menuToggleHandler}
        onClose={closeMenuHandler}
      />
    </>
  );
};

export default Header;

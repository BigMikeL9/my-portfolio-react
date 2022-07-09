import React, { useState } from "react";

import NavBar from "../../components/NavBar/NavBar";
import NavBarDrawer from "../../components/NavBarDrawer/NavBarDrawer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggleHandler = () => {
    setIsOpen((previousState) => !previousState);
  };

  const closeMenuHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NavBar isOpen={isOpen} onToggleMenu={menuToggleHandler} />
      <NavBarDrawer isOpen={isOpen} onClose={closeMenuHandler} />
    </>
  );
};

export default Header;

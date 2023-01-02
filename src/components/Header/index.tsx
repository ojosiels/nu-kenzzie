import React, { useContext } from "react";

import { MdLightMode, MdDarkMode } from "react-icons/md";

import { Link } from "react-router-dom";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { StyledHeader } from "./style";

const Header = () => {
  const { currentTheme, changeTheme } = useContext(DarkModeContext);

  return (
    <StyledHeader>
      <h3>
        Nu <span>Kenzie</span>
      </h3>
      <div>
        <button onClick={changeTheme}>
          {currentTheme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </button>
        <Link to={"/"}>Go back</Link>
      </div>
    </StyledHeader>
  );
};

export default Header;

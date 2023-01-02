import React, { useContext } from "react";

import { ThemeProvider } from "styled-components";
import { DarkModeContext } from "./contexts/DarkModeContext";

import GlobalStyles from "./styles/GlobalStyles";
import { themes } from "./styles/themes";

import Routes from "./routes";

function App() {
  const { currentTheme } = useContext(DarkModeContext);

  return (
    <>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyles />
      </ThemeProvider>
      <Routes />
    </>
  );
}

export default App;

import React, { createContext, ReactNode, useState } from "react";

interface iDarkModeContext {
  currentTheme: "dark" | "light";
  changeTheme: () => void;
}

interface iDarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeContext = createContext({} as iDarkModeContext);

const DarkModeProvider = ({ children }: iDarkModeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");

  const changeTheme = () => {
    currentTheme === "light"
      ? setCurrentTheme("dark")
      : setCurrentTheme("light");
  };

  return (
    <DarkModeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

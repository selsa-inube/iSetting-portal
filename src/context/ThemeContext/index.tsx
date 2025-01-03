import { useState, useEffect, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { tokensWithReference } from "@design/tokens/tokensWithReference";
import { ThemeContext, ThemeName } from "./themeContext";

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export const ThemeProviderWrapper = ({
  children,
}: ThemeProviderWrapperProps) => {
  const savedTheme =
    (localStorage.getItem("themeName") as ThemeName) || "sistemasenlinea";
  const [themeName, setThemeName] = useState<ThemeName>(savedTheme);

  useEffect(() => {
    localStorage.setItem("themeName", themeName);
  }, [themeName]);

  const theme = {
    ...tokensWithReference[themeName],
  };

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

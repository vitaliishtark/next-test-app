"use client";
import { FC, useEffect, useState } from "react";
import { Theme } from "@radix-ui/themes";

import {
  THEME_LOCAL_STORAGE_KEY,
  ThemeContext,
} from "@/context/ThemeContext";
import { getThemeFromLocalStorage } from "@/utils/theme.util";
import { THEME_ENUM } from "@/enums/enums";

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage || THEME_ENUM.LIGHT);

  const toggleTheme = () =>
    setTheme((oldTheme: THEME_ENUM) =>
      oldTheme === THEME_ENUM.LIGHT ? THEME_ENUM.DARK : THEME_ENUM.LIGHT
    );

  useEffect(() => {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Theme appearance={theme} accentColor="grass">{children}</Theme>
    </ThemeContext.Provider>
  );
};

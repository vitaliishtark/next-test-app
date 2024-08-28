"use client";
import { THEME_ENUM } from "@/enums/enums";
import { ThemeContextData } from "@/interfaces/interfaces";
import { createContext } from "react";

export const THEME_LOCAL_STORAGE_KEY = "theme";
export const DEFAULT_THEME = THEME_ENUM.DARK;
export const THEME_VALUES: string[] = Object.values(THEME_ENUM);

const DEFAULT_VALUE: ThemeContextData = {
  theme: DEFAULT_THEME,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextData>(DEFAULT_VALUE);

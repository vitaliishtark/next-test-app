import { DEFAULT_THEME,  THEME_LOCAL_STORAGE_KEY, THEME_VALUES } from "@/context/ThemeContext";
import { THEME_ENUM } from "@/enums/enums";

const isValidTheme = (value: string): value is THEME_ENUM =>
    THEME_VALUES.includes(value);
  
  export const getThemeFromLocalStorage = (): THEME_ENUM => {
    if (typeof window === "undefined") return DEFAULT_THEME;
  
    const themeValue = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
  
    if (themeValue && isValidTheme(themeValue)) return themeValue;
  
    return DEFAULT_THEME;
  };
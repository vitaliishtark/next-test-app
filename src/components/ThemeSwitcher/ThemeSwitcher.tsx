"use client";
import { Flex, Switch, Text } from "@radix-ui/themes";
import { useThemeContext } from "@/hooks/useThemeContext";
import React from "react";
import { capitalize } from "@/utils/general";
import { THEME_ENUM } from "@/enums/enums";

const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useThemeContext();
  const isLightTheme = theme === THEME_ENUM.LIGHT;
  return (
    <>
      <Flex gap="2" align={"center"}>
        <Switch size="1" checked={isLightTheme} onCheckedChange={toggleTheme} />{" "}
        <Text>{capitalize(theme)} Mode</Text>
      </Flex>
    </>
  );
};

export default ThemeSwitcher;

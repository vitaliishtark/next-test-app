"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import { navBarData } from "@/mock/navBar.data";
import { navBarDataProps } from "@/interfaces/interfaces";
import { useThemeContext } from "@/hooks/useThemeContext";
import { THEME_ENUM } from "@/enums/enums";

const NavBar = () => {
  const { theme } = useThemeContext();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const search = searchParams.get("tab");

  const [color, setColor] = useState<string>("white");

  useEffect(() => {
    if (theme !== THEME_ENUM.DARK) {
      setColor("black");
    } else {
      setColor("white");
    }
  }, [theme]);

  return (
    <Box width="100%">
      <Flex direction="column" gap="3" width={"100%"} align={"stretch"}>
        {navBarData.map((item: navBarDataProps) => (
          <Box key={item.id} style={{ width: "100%" }}>
            <Button
              onClick={() => {
                router.push(pathname + `?tab=${item.link}`);
              }}
              variant={"ghost"}
              size={"3"}
              style={
                item.link === search || (!search && item.link === "dashboard")
                  ? { width: "100%", backgroundColor: "#70fe8c1b" }
                  : { width: "100%" }
              }
            >
              <Flex gap="4" align={"center"} width={"100%"} justify={"start"}>
                <item.icon color={color} width="16" height="16" />
                <Text size={"4"} weight={"regular"}>
                  {item.title}
                </Text>
              </Flex>
            </Button>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default NavBar;

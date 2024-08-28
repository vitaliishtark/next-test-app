import { Box, Flex } from "@radix-ui/themes";
import React, {  FC } from "react";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import { Main } from "../Main/Main";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box height={"100vh"}>
      <Flex direction={"row"} height={"100%"} gap={"9"}>
        <Aside />
        <Flex direction={"column"} height={"95%"} width={"100%"}>
            <Header />
            <Main>{children}</Main>
        </Flex>
      </Flex>
    </Box>
  );
};

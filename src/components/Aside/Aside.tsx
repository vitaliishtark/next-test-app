import React, { Suspense } from "react";
import NavBar from "./NavBar/NavBar";
import { Box, Flex } from "@radix-ui/themes";
import { Logo } from "../Logo/Logo";
import AsideFooter from "./AsideFooter/AsideFooter";
import { Events } from "./Events/Events";

const Aside = () => {
  return (
    <Box px={"5"} py={"4"} height={"100%"} width={"250px"} className="aside">
      <Flex direction={"column"} height={"100%"} justify={"between"}>
        <Flex direction={"column"} gap={"5"}>
          <Box py="4" pl={"2"}>
            <Logo />
          </Box>
          <Suspense>
            <NavBar />
          </Suspense>
          <Events />
        </Flex>
        <AsideFooter />
      </Flex>
    </Box>
  );
};

export default Aside;

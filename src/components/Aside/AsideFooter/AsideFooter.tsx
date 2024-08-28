import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import { Flex, Link } from "@radix-ui/themes";
import React from "react";

const AsideFooter = () => {
  return (
    <Flex direction={"column"} gap={"2"}>
      <ThemeSwitcher />
      <Link href="#" size={"3"}>Terms of Use</Link>
      <Link href="#" size={"3"}>Privacy Policy</Link>
    </Flex>
  );
};

export default AsideFooter;

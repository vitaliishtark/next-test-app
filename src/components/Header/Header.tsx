import { Avatar, Box, Flex, IconButton } from "@radix-ui/themes";
import React from "react";
import SearchInput from "../global/SearchInput/SearchInput";
import {
  BellIcon,
  CaretLeftIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
const Header = () => {
  return (
    <Box py={"5"} pr={"4"} width={"100%"}>
      <Flex
        direction={"row"}
        justify={"between"}
        width={"100%"}
        className="header"
      >
        <SearchInput />
        <Box>
          <Flex gap={"4"}>
            <IconButton size="3" variant="soft" color="gray">
              <BellIcon color="#AFB5AD" width={"16"} height={"16"} />
            </IconButton>
            <Avatar
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              fallback="A"
            />
          </Flex>
        </Box>
      </Flex>
      <Flex
        direction={"row"}
        justify={"between"}
        width={"100%"}
        className="header-mobile"
      >
        <IconButton variant="soft" color="gray">
          <CaretLeftIcon />
        </IconButton>
        <IconButton variant="soft">
          <HamburgerMenuIcon />
        </IconButton>
      </Flex>
    </Box>
  );
};

export default Header;

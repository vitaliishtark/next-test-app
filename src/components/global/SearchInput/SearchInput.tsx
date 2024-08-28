"use client";
import CommandImage from "@/assets/CommandImage";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, IconButton, TextField } from "@radix-ui/themes";
import React from "react";

const SearchInput = () => {
  return (
    <Box width={"35%"} className="search-input">
      <TextField.Root placeholder="Search ShowOps" radius="medium">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Slot>
          <IconButton size="1" variant="ghost">
            <CommandImage />
          </IconButton>
        </TextField.Slot>
      </TextField.Root>
    </Box>
  );
};

export default SearchInput;

// #AFB5AD

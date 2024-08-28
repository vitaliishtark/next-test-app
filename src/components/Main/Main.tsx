import { Box, ScrollArea } from "@radix-ui/themes";
import React, { FC } from "react";

type MainProps = {
  children: React.ReactNode;
};

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <ScrollArea scrollbars={"vertical"} >
      <Box
        maxWidth={"570px"}
        width={"100%"}
        style={{ overflow: "hidden" }}
        className="main"
      >
        {children}
      </Box>
    </ScrollArea>
  );
};

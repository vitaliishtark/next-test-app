import LogoImage from "@/assets/LogoImage";
import { Box } from "@radix-ui/themes";
import React, { FC } from "react";

type LogoProps = {
  width?: string;
  height?: string;
};

export const Logo: FC<LogoProps> = ({ width = "150px", height = "30px" }) => {
  return (
    <Box width={width} height={height}>
      <LogoImage />
    </Box>
  );
};

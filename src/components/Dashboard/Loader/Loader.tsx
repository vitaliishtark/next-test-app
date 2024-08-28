import { Box, Flex, Skeleton } from "@radix-ui/themes";
import React from "react";

const Loader = () => {
  return (
    <Box width={"100%"}>
      <Flex direction={"column"} gap={"8"} width={"100%"}>
        <Flex gap={"3"} width={"100%"} direction={"column"}>
          <Skeleton width={"20%"} height={"20px"}></Skeleton>
          <Skeleton width={"100%"} height={"40px"}></Skeleton>
        </Flex>
        <Skeleton width={"100%"} height={"80px"}></Skeleton>
        <Skeleton width={"100%"} height={"120px"}></Skeleton>
        <Skeleton width={"100%"} height={"100px"}></Skeleton>
        <Flex gap={"3"} width={"100%"} direction={"column"}>
          <Skeleton width={"100%"} height={"80px"}></Skeleton>
          <Skeleton width={"100%"} height={"160px"}></Skeleton>
        </Flex>
        <Skeleton width={"40%"} height={"30px"}></Skeleton>
      </Flex>
    </Box>
  );
};

export default Loader;

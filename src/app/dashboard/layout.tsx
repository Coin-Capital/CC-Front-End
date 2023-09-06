"use client";

import { Box, Flex } from "@chakra-ui/react";
import SideBar from "../../components/SideBar";
import React, { Children, ReactNode } from "react";

interface propsTypes {
  children: ReactNode;
}

function layout({ children }: propsTypes) {
  return (
    <Box display="flex" flexDirection="column">
      <SideBar />
      <Box
        display="flex"
        position="absolute"
        w="83%"
        mt="7rem"
        justifyContent="center"
        alignContent="center"
        ml={["", "5rem", "15rem", "", "", ""]}
      >
        {children}
      </Box>
    </Box>
  );
}

export default layout;

"use client";

import MyProfile from "./myProfile/MyProfile";

import React from "react";

import { Box } from "@chakra-ui/react";

function MainBox() {
  return (
    <div>
      <Box
        display="flex"
        bg="slate.100"
        w="screen"
        h="50rem"
        mr="5%"
        ml="17%"
        color={"slate"}
      >
        <MyProfile />
      </Box>
    </div>
  );
}

export default MainBox;

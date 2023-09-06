"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import MyProfile from "@/components/myProfile/MyProfile";
function page() {
  return (
    <Box justifyContent="space-between" w="100%" ml={["", "0rem", "-15rem"]}>
      <MyProfile />
    </Box>
  );
}

export default page;

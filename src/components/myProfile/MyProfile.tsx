"use client";
import React, { MouseEventHandler, useEffect, useState } from "react";

import { Box, Text, Flex, Input } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
} from "@chakra-ui/react";

import MyRegister from "./MyRegister";
import Overview from "./Overview";
import Privace from "./Privace";

function MyProfile() {
  const user = {
    name: "userName",
    email: "userEmail@X.Com",
    perfImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
  };

  const [activeTab, setActiveTab] = useState(1);
  const handleClick = () => {
    setActiveTab;
  };

  return (
    <Box w="100%">
      <Box>
        <Flex h="48px" alignItems="center" justifyContent="space-between">
          <Text
            w="auto"
            fontSize={["xl", "xl", "xl", "2xl"]}
            fontFamily="system-ui"
            fontWeight="bold"
            ml={["0px", "0px", "6rem", "5rem"]}
          >
            Meu Perfil
          </Text>
          <Tabs variant="enclosed" borderRadius="42px" defaultIndex={1}>
            <TabList borderRadius="32px" h="48px">
              <Tab
                borderRadius="32px"
                textColor="black"
                _focus={{ backgroundColor: "purple.700", color: "white" }}
                onClick={() => {
                  setActiveTab(1);
                }}
                fontSize="md"
              >
                Visão geral
              </Tab>
              <Tab
                borderRadius="32px"
                textColor="black"
                _focus={{ backgroundColor: "purple.700", color: "white" }}
                onClick={() => {
                  setActiveTab(2);
                }}
              >
                Meu cadastro
              </Tab>
              <Tab
                borderRadius="32px"
                textColor="black"
                _focus={{ backgroundColor: "purple.700", color: "white" }}
                onClick={() => {
                  setActiveTab(3);
                }}
              >
                Privacidade
              </Tab>
            </TabList>
          </Tabs>
        </Flex>
      </Box>
      {activeTab === 1 && <Overview />}
      {activeTab === 2 && <MyRegister />}
      {activeTab === 3 && <Privace />}
    </Box>
  );
}

export default MyProfile;

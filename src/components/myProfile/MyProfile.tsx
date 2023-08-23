"use client";
import React, { useState } from "react";

import { Box, Text, Flex, Input } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
} from "@chakra-ui/react";

function MyProfile() {
  const user = {
    name: "userName",
    email: "userEmail@X.Com",
    perfImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
  };

  return (
    <Box w="100%">
      <Flex h="48px" alignItems="center" justifyContent="space-between">
        <Text w="auto" fontSize="2xl" fontFamily="system-ui" fontWeight="bold">
          Meu Perfil
        </Text>
        <Tabs variant="enclosed" borderRadius="42px">
          <TabList borderRadius="32px" h="48px">
            <Tab
              borderRadius="32px"
              textColor="black"
              _focus={{ backgroundColor: "purple.700", color: "white" }}
            >
              Visão geral
            </Tab>
            <Tab
              borderRadius="32px"
              textColor="black"
              _focus={{ backgroundColor: "purple.700", color: "white" }}
            >
              Meu cadastro
            </Tab>
            <Tab
              borderRadius="32px"
              textColor="black"
              _focus={{ backgroundColor: "purple.700", color: "white" }}
            >
              Privacidade
            </Tab>
          </TabList>
        </Tabs>
      </Flex>
      <Box
        w="100%"
        h="auto"
        display="flex"
        justifyContent="space-between"
        mt="64px"
        backgroundColor="gray.100"
      >
        <Flex ml="42px" mt="32px" flexDirection="column">
          <Box _focusVisible={{ color: "purple" }}>
            <Text fontSize="xl" fontWeight="bold">
              Dados da conta
            </Text>
          </Box>
          <Text
            fontSize="14px"
            marginTop="32px">
            Nome
          </Text>
          <Input
            mt="16px"
            w="auto"
            border="none"
            borderBottom="2px"
            borderBottomColor="gray.600"
            _focusVisible={{
              border: "none",
              borderBottom: "2px",
              borderBottomColor: "purple",
              _hover: { borderColor: "purple" },
            }}
            borderRadius="0px"
            _hover={{ borderColor: "black" }}
            value={user.name}
          ></Input>
          <Text
            fontSize="14px"
            marginTop="32px">
            E-mail
          </Text>
          <Input
            mt="16px"
            w="auto"
            border="none"
            borderBottom="2px"
            borderBottomColor="gray.600"
            _focusVisible={{
              border: "none",
              borderBottom: "2px",
              borderBottomColor: "purple",
              _hover: { borderColor: "purple" },
            }}
            borderRadius="0px"
            _hover={{ borderColor: "black" }}
            value={user.email}
          ></Input>
          <Text
            fontSize="14px"
            marginTop="32px">Objetivo financeiro</Text>
          <Select
            width="auto"
            mt="24px"
            _hover={{
              border: "none",
              borderBottom: "2px",
              borderColor: "black",
            }}
            border="none"
            borderBottom="2px"
            borderBottomColor="gray.600"
            borderRadius="none"
            _focusVisible={{
              border: "none",
              borderBottom: "2px",
              borderBottomColor: "purple",
              _hover: { borderColor: "purple" },
            }}
          >
            <option value="option1">Sair das dividas</option>
            <option value="option2">Começar a economizar</option>
            <option value="option3">Começar a investir</option>
            <option value="option4">Otimizar investimentos</option>
          </Select>
        </Flex>
        <Box boxSize="sm" display='flex' alignItems='center'>
          <Image src={`${user.perfImg}`} alt="imagem de perfil" />
        </Box>
      </Box>
    </Box>
  );
}

export default MyProfile;

"use client";

import React, { useState } from "react";

import { Box, Image, Text, Flex, Tabs, TabList, Tab } from "@chakra-ui/react";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";

function Page() {
  const [focus, setFocus] = useState<number>(1);

  return (
    <Box fontFamily="system-ui">
      <Flex
        w="screen"
        h="auto"
        justifyContent="center"
        mt="12%"
        alignItems="center"
        direction={["column", "column", "column", "row"]}
      >
        <Flex flexDirection="column" w="20rem">
          <Text
            w="20rem"
            textAlign="center"
            fontSize={["xl", "xl", "xl", "2xl"]}
            fontWeight="bold"
          >
            Hora de transformar suas finanças com a Coin Capital
          </Text>
          <Image
            src="/Logo.png"
            ml={["65px", "65px", "65px", "0px"]}
            alt="Logo"
            w={["200px", "200px", "200px", "355px"]}
          />
          <Text w="20rem" textAlign="center">
            Seu patrimonio sobre seu controle, e com quem entende de finanças
          </Text>
        </Flex>
        <Flex
          justifyContent="center"
          w="20rem"
          h="auto"
          flexDirection="column"
          ml="20rem"
        >
          <Flex w="100%" justifyContent="space-evenly" h="auto">
            <Tabs
              mr={["18rem", "18rem", "18rem"]}
              mt={["4rem", "4rem", "4rem"]}
            >
              <TabList border="none">
                <Tab
                  _hover={{
                    borderBottom: "2px",
                    borderBottomColor: "black",
                  }}
                  _focus={{
                    color: "black",
                    borderBottom: "2px",
                    borderBottomColor: "purple",
                  }}
                  onClick={() => {
                    setFocus(1);
                    console.log(focus);
                  }}
                  borderBottom={focus === 1 ? "2px" : "none"}
                  borderBottomColor={focus === 1 ? "purple" : "purple"}
                  color={focus === 1 ? "black" : "gray.700"}
                >
                  Login
                </Tab>
                <Tab
                  _hover={{
                    borderBottom: "2px",
                    borderBottomColor: "black",
                  }}
                  _focus={{
                    color: "black",
                    borderBottom: "2px",
                    borderBottomColor: "purple",
                  }}
                  onClick={() => {
                    setFocus(2);
                    console.log(focus);
                  }}
                  borderBottom={focus === 2 ? "2px" : "none"}
                  borderBottomColor={focus === 2 ? "purple" : "purple"}
                  color={focus === 2 ? "black" : "gray.700"}
                >
                  Cadastrar
                </Tab>
              </TabList>
            </Tabs>
          </Flex>
          <Flex mr={["18rem", "18rem", "18rem"]}>
            {focus === 1 ? <Login /> : null}
          </Flex>
          <Flex mr={["18rem", "18rem", "18rem"]}>
            {focus === 2 ? <Register /> : null}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Page;

"use client";
import React from "react";

import Link from "next/link";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";

function Page() {
  return (
    <Box>
      <Flex
        w="100%"
        backgroundColor="purple.700"
        h="5rem"
        justifyContent="space-between"
        placeItems="center"
      >
        <Box>
          <Image
            src="/TransparentLogo2.png"
            w="90px"
            alt="logo"
            ml="16px"
          ></Image>
        </Box>
        <Text color="white" fontSize="4xl" fontFamily="-moz-initial">
          Coin Capital
        </Text>
        <Button mr="32px" _hover={{ backgroundColor: "yellow.200" }}>
          <Link href="/auth"> Iniciar Sessão</Link>
        </Button>
      </Flex>
      <Flex
        justifyContent="center"
        w="100%"
        h="calc(100vh - 5rem)"
        bgGradient="linear(to-l, purple.400, purple.600 )"
        alignItems="center"
        alignContent="center"
      >
        <Flex flexDirection="column">
          <Text
            mt={["0px", "0px", "0px", "32px"]}
            color="white"
            fontSize={["4xl", "4xl", "4xl", "6xl"]}
            textAlign="start"
            fontFamily="body"
            w="30rem"
          >
            As melhores Soluções para seu dinheiro
          </Text>
          <Text mt="32px" fontSize={["xl", "xl", "xl", "md"]}>
            Provando excelencia e qualidade em primeiro lugar
          </Text>
          <Link href="/auth">
            <Button
              mt="32px"
              _hover={{ backgroundColor: "yellow.200" }}
              ml={["7rem"]}
            >
              Registre-se agora
            </Button>
          </Link>
        </Flex>
        <Flex>
          <Image
            src="/happygirl.png"
            alt="Pessoa"
            h="50rem"
            w={["0px", "0px", "0rem", "35rem"]}
            alignSelf="end"
          ></Image>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Page;

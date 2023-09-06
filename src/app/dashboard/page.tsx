"use client";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";

import { FaWallet } from "react-icons/fa";

function Dashboard() {
  return (
    <Box w="100%" ml={["5rem", "", "3rem", "3rem"]}>
      <Box>
        <Text fontWeight="bold" fontSize="2xl">
          Dashboard
        </Text>
      </Box>
      <Flex
        w="100%"
        flexDirection={["column", "column", "column", "column", "inherit"]}
        alignSelf="start"
      >
        <Flex
          justifyContent="space-between"
          mt="44px"
          backgroundColor="#b57fd4"
          w="15rem"
          h="7rem"
          borderRadius="26px"
          m="16px"
        >
          <Flex flexDirection="column">
            <Text m="16px" textColor="gray.700">
              Saldo Atual
            </Text>
            <Text ml="16px" fontSize="24px">
              R$ 00,00
            </Text>
          </Flex>
          <Flex placeItems="center" mr="16px">
            <Image src="/Wallet.png" w="44px" h="44px" alt="wallet img" />
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          mt="44px"
          backgroundColor="#b57fd4"
          w="15rem"
          h="7rem"
          borderRadius="26px"
          m="16px"
        >
          <Flex flexDirection="column">
            <Text m="16px" textColor="gray.700">
              Receitas
            </Text>
            <Text ml="16px" fontSize="24px">
              R$ 00,00
            </Text>
          </Flex>
          <Flex placeItems="center" mr="16px">
            <Image src="/upgreenarrow.png" w="44px" h="44px" alt="wallet img" />
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          mt="44px"
          backgroundColor="#b57fd4"
          w="15rem"
          h="7rem"
          borderRadius="26px"
          m="16px"
        >
          <Flex flexDirection="column">
            <Text m="16px" textColor="gray.700">
              Despesas
            </Text>
            <Text ml="16px" fontSize="24px">
              R$ 00,00
            </Text>
          </Flex>
          <Flex placeItems="center" mr="16px">
            <Image src="/downredarrow.png" w="44px" h="44px" alt="wallet img" />
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          mt="44px"
          backgroundColor="#b57fd4"
          w="15rem"
          h="7rem"
          borderRadius="26px"
          m="16px"
        >
          <Flex flexDirection="column">
            <Text m="16px" textColor="gray.700">
              Cartão de crédito
            </Text>
            <Text ml="16px" fontSize="24px">
              R$ 00,00
            </Text>
          </Flex>
          <Flex placeItems="center" mr="16px">
            <Image src="/card.png" w="44px" h="44px" alt="wallet img" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Dashboard;

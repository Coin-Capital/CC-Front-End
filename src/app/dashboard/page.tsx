"use client";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import SideBar from "../../components/SideBar";
import React from "react";

import { FaWallet } from "react-icons/fa";

function Dashboard() {
  return (
    <Box>
      <Box>
        <Text fontWeight="bold" fontSize="2xl">
          Dashboard
        </Text>
      </Box>
      <Flex>
        <Flex
          justifyContent="space-between"
          mt="44px"
          backgroundColor="#b57fd4"
          w="20rem"
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
          w="20rem"
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
          w="20rem"
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
          w="20rem"
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

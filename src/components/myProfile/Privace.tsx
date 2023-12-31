import React from "react";

import { Box, Text, Flex, Button } from "@chakra-ui/react";

function Privace() {
  return (
    <Box
      w="100%"
      h="auto"
      display="flex"
      mt="64px"
      borderRadius="32px"
      flexDirection="column"
      backgroundColor="gray.100"
      padding="32px"
      alignItems={["center", "center", "center", "center"]}
    >
      <Flex flexDirection={["column", "column", "column"]}>
        <Box
          w={["", "", "25rem", "43rem"]}
          display="flex"
          flexDirection="column"
          padding="32px"
          backgroundColor="white"
          borderRadius="24px"
          ml={["0px", "0px", "4rem", "2rem"]}
          alignSelf="center"
        >
          <Text fontSize="2xl" fontFamily="system-ui" fontWeight="bold">
            Começar do zero
          </Text>
          <Text mt="16px">
            Clicando abaixo você irá zerar todos os seus dados financeiros,
            preservando seu cadastro.
          </Text>
          <Button
            backgroundColor="pink.900"
            color="White"
            borderRadius="24px"
            _hover={{ backgroundColor: "purple" }}
            mt="32px"
          >
            Reiniciar Conta
          </Button>
        </Box>
        <Box
          w={["", "", "25rem", "43rem"]}
          mt={["32px", "32px", "32px", "32px"]}
          ml={["0px", "0px", "4rem", "2rem"]}
          display="flex"
          flexDirection="column"
          padding="32px"
          backgroundColor="white"
          borderRadius="24px"
          alignSelf="center"
        >
          <Text fontSize="2xl" fontFamily="system-ui" fontWeight="bold">
            Excluir Cadastro
          </Text>
          <Text mt="16px">
            Clicando no botão abaixo, você irá excluir o seu cadastro do
            Mobills, juntamente com todos os seus dados financeiros. Sua
            assinatura não será cancelada!
          </Text>
          <Button
            backgroundColor="red.500"
            color="White"
            borderRadius="24px"
            _hover={{ backgroundColor: "red.700" }}
            mt="32px"
          >
            Excluir cadastro
          </Button>
        </Box>
        <Box
          display="flex"
          w={["", "", "25rem", "43rem"]}
          flexDirection="column"
          mt={["32px", "32px", "32px", "32px"]}
          padding="32px"
          backgroundColor="white"
          borderRadius="24px"
          ml={["0px", "0px", "5rem", "2rem"]}
        >
          <Text fontSize="2xl" fontFamily="system-ui" fontWeight="bold">
            Exportar Dados
          </Text>
          <Text mt="16px">
            Você pode visualizar ou baixar suas informações a qualquer momento.
            Clique abaixo para exportar seus dados financeiros.
          </Text>
          <Button
            backgroundColor="pink.900"
            color="White"
            borderRadius="24px"
            _hover={{ backgroundColor: "purple" }}
            mt="32px"
          >
            Exportar Dados
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default Privace;

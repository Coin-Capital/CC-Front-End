import React from "react";

import { Box, Text, Flex, Input, Select, Image } from "@chakra-ui/react";

function Overview() {
  const user = {
    name: "userName",
    email: "userEmail@X.Com",
    perfImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
  };

  return (
    <Box
      w="100%"
      h="auto"
      display="flex"
      justifyContent="space-between"
      mt="64px"
      backgroundColor="gray.100"
      borderRadius="32px"
      pb="16px"
      ml={["0px", "0xp", "0px", "3rem"]}
    >
      <Flex
        ml={["3rem", "3rem", "0px", "3rem"]}
        mt="32px"
        flexDirection="column"
      >
        <Box>
          <Text
            fontSize="xl"
            fontWeight="bold"
            ml={["0px", "0px", "8rem", "0px"]}
          >
            Dados da conta
          </Text>
        </Box>
        <Text
          fontSize="14px"
          marginTop="32px"
          ml={["0px", "0px", "8rem", "0px"]}
        >
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
          ml={["0px", "0px", "8rem", "0px"]}
        ></Input>
        <Text
          fontSize="14px"
          marginTop="32px"
          ml={["0px", "0px", "8rem", "0px"]}
        >
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
          ml={["0px", "0px", "8rem", "0px"]}
        ></Input>
        <Text
          fontSize="14px"
          marginTop="32px"
          ml={["0px", "0px", "8rem", "0px"]}
        >
          Objetivo financeiro
        </Text>
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
          ml={["0px", "0px", "8rem", "0px"]}
        >
          <option value="option1">Sair das dividas</option>
          <option value="option2">Começar a economizar</option>
          <option value="option3">Começar a investir</option>
          <option value="option4">Otimizar investimentos</option>
        </Select>
      </Flex>
      <Box
        flexDirection="row-reverse"
        boxSize="sm"
        display="flex"
        justifyContent={["", "", "", "start"]}
        alignItems={["start", "start", "start", "start"]}
      >
        <Image
          w={["0px", "10rem", "10rem", "25rem"]}
          src={`${user.perfImg}`}
          alt="imagem de perfil"
        />
      </Box>
    </Box>
  );
}

export default Overview;

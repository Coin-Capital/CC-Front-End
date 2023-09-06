import React from "react";

import { Box, Text, Input, Select, Button } from "@chakra-ui/react";

function MyRegister() {
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
      mt="64px"
      backgroundColor="gray.100"
      borderRadius="32px"
      justifyContent="space-evenly"
      ml={["0px", "0px", "2rem", "0px", "0px"]}
    >
      <Box
        pb="32px"
        display="flex"
        flexDirection={["column", "column", "column", "column"]}
        justifyContent="center"
        ml={["9rem", "0", "0"]}
      >
        <Box display="flex" flexDirection="column" ml="40px">
          <Text fontSize="xl" fontWeight="bold">
            Meus Dados
          </Text>
          <Text fontSize="14px" marginTop="32px">
            Nome completo
          </Text>
          <Input
            mt="16px"
            w="25rem"
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
          <Text fontSize="14px" marginTop="32px">
            E-mail
          </Text>
          <Input
            mt="16px"
            w="25rem"
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
          <Text fontSize="14px" marginTop="32px">
            Telefone
          </Text>
          <Input
            mt="16px"
            w="25rem"
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
          ></Input>
        </Box>
        <Box m="42px" mt="61px" display="flex" flexDirection="column">
          <Text fontSize="14px" marginTop="32px">
            CEP
          </Text>
          <Input
            mt="16px"
            w="25rem"
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
          ></Input>
          <Text fontSize="14px" marginTop="32px">
            Estado
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
          ></Input>
          <Text fontSize="14px" marginTop="32px">
            Cidade
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
          ></Input>
        </Box>
        <Box display="flex" flexDirection="column" ml="64px" mt="62px">
          <Text fontSize="14px" marginTop="32px">
            Aniversário
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
          ></Input>
          <Text fontSize="14px" marginTop="32px">
            Sexo
          </Text>
          <Select mt="24px">
            <option value="male">Masculino</option>
            <option value="famele">Feminino</option>
            <option value="nonDeclare">Prefiro não declarar</option>
          </Select>
          <Text fontSize="14px" marginTop="32px">
            Nacionalidade
          </Text>
          <Select mt="24px">
            <option value="br">Brasileiro</option>
            <option value="estranger">Estrangeiro</option>
          </Select>
          <Text fontSize="14px" marginTop="32px">
            CPF
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
          ></Input>
          <Text fontSize="14px" marginTop="32px">
            Objetivo Financeiro
          </Text>
          <Select mt="24px">
            <option value="economic">Começar a economizar</option>
            <option value="powerGain">Otimizar investimentos</option>
            <option value="exitCosts">Sair das Dividas</option>
            <option value="gain">Começar a investir</option>
          </Select>
          <Button
            alignSelf={["center", "center", "end"]}
            backgroundColor="purple"
            color="white"
            borderRadius="32px"
            marginTop="42px"
            _hover={{ backgroundColor: "purple" }}
          >
            Continuar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default MyRegister;

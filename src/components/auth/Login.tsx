"use client";
/**
 *
 */

import React, { useState } from "react";

import { Button, Text, Flex, Input } from "@chakra-ui/react";

function Login() {
  const [password, setPassword] = useState<string>();

  return (
    <Flex w="100%" justifyContent="center">
      <Flex flexDirection="column">
        <Text fontSize="14px" marginTop="32px">
          E-mail
        </Text>
        <Input
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
          Senha
        </Text>
        <Input
          type="password"
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
        <Button
          mt="16px"
          borderRadius="32px"
          backgroundColor="purple.200"
          _hover={{ backgroundColor: "purple", color: "white" }}
        >
          Logar-se
        </Button>
      </Flex>
    </Flex>
  );
}

export default Login;

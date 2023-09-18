"useClient";
import React, { ChangeEvent, SetStateAction, useState } from "react";

import { Box, Text, Flex, Input, Button } from "@chakra-ui/react";

function Register() {
  const [userName, setUserName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleUserName = (e: ChangeEvent<HTMLInputElement>) => {
    const newUser = e.target.value;
    setUserName(newUser);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setEmail(newPassword);
  };
  /**
   * Register é a função que deve ser enviada para o cadastro do usuario no banco de dados!
   * @constructor
   * @param {string} name - {string} nome do usuario
   * @param {string} email - {string} email do usuario
   * @param {string} password - {string} senha do usuario
   */
  const register = () => {
    const userData = { userName, email, password };
  };

  return (
    <Flex w="100%" justifyContent="center">
      <Flex flexDirection="column">
        <Text fontSize="14px" marginTop="32px">
          Nome do usuario
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
          type="text"
          borderRadius="0px"
          _hover={{ borderColor: "black" }}
          onChange={handleUserName}
        ></Input>
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
          type="text"
          onChange={handleEmail}
        ></Input>
        <Text fontSize="14px" marginTop="32px">
          Senha
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
          type="password"
          onChange={handlePassword}
        ></Input>
        <Button
          mt="16px"
          borderRadius="32px"
          backgroundColor="purple.200"
          _hover={{ backgroundColor: "purple", color: "white" }}
          onClick={register}
        >
          Cadastrar
        </Button>
      </Flex>
    </Flex>
  );
}

export default Register;

import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import RegisterModalReal from "../components/Modal/RegisterModalReal";

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex minH="100vh" align="center" justify="center" bg="green.800">
      <Box bg="white" p={8} rounded="lg" boxShadow="lg" w="full" maxW="md">
        <Stack spacing={4}>
          <Heading textAlign="center" color="green.500">
            SocioPLUS
          </Heading>

          <Box>
            <Text fontWeight="semibold" mb={1}>
              Email
            </Text>
            <Input
              type="email"
              placeholder="Ingresa tu email"
              border="1px solid gray"
              bg="transparent"
              color="white"
              borderRadius="lg"
            />
          </Box>

          <Box>
            <Text fontWeight="semibold" mb={1}>
              Número de documento
            </Text>
            <Input
              type="text"
              placeholder="Ingresa tu documento"
              border="1px solid gray"
              borderRadius="lg"
            />
          </Box>

          <Box>
            <Text fontWeight="semibold" mb={1}>
              Contraseña
            </Text>
            <Input
              type="password"
              placeholder="Ingresa tu contraseña"
              border="1px solid gray"
              borderRadius="lg"
            />
          </Box>

          <Flex justify="space-between" align="center">
            <label>
              <input type="checkbox" /> Recuérdame
            </label>
            <Link color="black.500" href="#">
              Olvidé mi contraseña
            </Link>
          </Flex>

          <Button
            bg="green.600"
            color="white"
            borderRadius="full"
            _hover={{ bg: "green.700" }}
          >
            Ingresar
          </Button>

          <Text textAlign="center">
            ¿No tienes una cuenta?{" "}
            <Link
              as="span"
              textDecoration="underline"
              color="black"
              cursor="pointer"
              onClick={onOpen}
            >
              Regístrate
            </Link>
          </Text>
        </Stack>
      </Box>
      <RegisterModalReal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

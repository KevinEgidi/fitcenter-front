import React from "react";
import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";

export default function RegisterModalReal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      bg="blackAlpha.600"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={1000}
    >
      <Box
        bg="white"
        p={8}
        rounded="lg"
        boxShadow="lg"
        w="full"
        maxW="md"
        position="relative"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Registro
        </Text>

        <Stack spacing={3}>
          <Box>
            <Text fontWeight="semibold" mb={1}>
              Nombre
            </Text>
            <Input placeholder="Ingresa tu nombre" />
          </Box>

          <Box>
            <Text fontWeight="semibold" mb={1}>
              Número de documento
            </Text>
            <Input placeholder="Ingresa tu documento" />
          </Box>

          <Box>
            <Text fontWeight="semibold" mb={1}>
              Email
            </Text>
            <Input type="email" placeholder="Ingresa tu email" />
          </Box>

          <Box>
            <Text fontWeight="semibold" mb={1}>
              Contraseña
            </Text>
            <Input type="password" placeholder="Crea una contraseña" />
          </Box>

          <Box>
            <Text fontWeight="semibold" mb={1}>
              Confirmar Contraseña
            </Text>
            <Input type="password" placeholder="Repite la contraseña" />
          </Box>
        </Stack>

        <Box display="flex" justifyContent="flex-end" mt={6}>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="green">Registrarse</Button>
        </Box>
      </Box>
    </Box>
  );
}

/*Usando el modal de chakra no me anda, no me reconoce directmente el modal
import React from "react";
import {
  Box,
  Button,
  Input,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "../../chakra"; // <- import global

export default function RegisterModalReal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Registro</ModalHeader>
        <ModalBody>
          <Stack spacing={3}>
            <Box>
              <Text fontWeight="semibold" mb={1}>
                Nombre
              </Text>
              <Input placeholder="Ingresa tu nombre" />
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={1}>
                Número de documento
              </Text>
              <Input placeholder="Ingresa tu documento" />
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={1}>
                Email
              </Text>
              <Input type="email" placeholder="Ingresa tu email" />
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={1}>
                Contraseña
              </Text>
              <Input type="password" placeholder="Crea una contraseña" />
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={1}>
                Confirmar Contraseña
              </Text>
              <Input type="password" placeholder="Repite la contraseña" />
            </Box>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="green">Registrarse</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
} */

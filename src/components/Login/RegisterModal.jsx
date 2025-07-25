import React from "react";
import {
  Button,
  FormLabel,
  Input,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
export default function RegisterModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Registro</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input type="text" placeholder="Ingresa tu nombre" />
            </FormControl>

            <FormControl>
              <FormLabel>Número de documento</FormLabel>
              <Input type="text" placeholder="Ingresa tu documento" />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Ingresa tu email" />
            </FormControl>

            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" placeholder="Crea una contraseña" />
            </FormControl>

            <FormControl>
              <FormLabel>Confirmar Contraseña</FormLabel>
              <Input type="password" placeholder="Repite la contraseña" />
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3}>
            Registrarse
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

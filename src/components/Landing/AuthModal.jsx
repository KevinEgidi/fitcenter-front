import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  VStack,
  InputGroup,
  InputRightElement,
  Select,
  Input,
  Button,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Switch,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthContext";
import { FaPhoneAlt } from "react-icons/fa";
import { useFormValidation } from "../../utils/useFormValidation";

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, signIn, signUp } = useAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const [tabIndex, setTabIndex] = useState(0); // 0 = Cliente, 1 = Profesor
  const [show, setShow] = useState(false);
  const { values, errors, handleChange, validateForm, handleResetForm } =
    useFormValidation({
      email: "",
      password: "",
      nombre: "",
      apellido: "",
      direccion: "",
      celular: "",
      imagen: "",
      nroMatricula: "",
      tipoProfesor: false,
    });

  useEffect(() => {
    if (isLogin) {
      validateForm(["email", "password"]);
    } else {
      validateForm(["email", "password", "nombre", "apellido", "celular"]);
    }
  }, [values, isLogin]);

  const handleClick = () => setShow(!show);

  const handleLogin = async () => {
    if (Object.keys(errors).length != 0) return;
    setLoading(true);
    try {
      await signIn(values.email, values.password);
      Swal.fire({ title: "Login exitoso!", icon: "success" });
      closeAuthModal();
    } catch (err) {
      closeAuthModal();
      Swal.fire({ title: "Error", text: err.message, icon: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (Object.keys(errors).length != 0) return;
    setLoading(true);
    try {
      const userData = {
        nombre: values.nombre,
        apellido: values.apellido,
        direccion: values.direccion,
        celular: values.celular,
        email: values.email,
        password: values.password,
        imagen: values.imagen,
        ...(tabIndex === 1 && {
          nroMatricula: values.nroMatricula,
          tipoProfesor: values.tipoProfesor,
        }),
      };
      await signUp(userData.email, userData.password);
      Swal.fire({
        title: "Registro exitoso! Por favor, verifica tu correo.",
        icon: "success",
      });
      closeAuthModal();
    } catch (err) {
      closeAuthModal();
      Swal.fire({ title: "Error", text: err.message, icon: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsLogin(true);
    handleResetForm({
      email: "",
      password: "",
      nombre: "",
      apellido: "",
      direccion: "",
      celular: "",
      imagen: "",
      nroMatricula: "",
      tipoProfesor: false,
    });
    setTabIndex(0);
    closeAuthModal();
  };

  return (
    <Modal
      isOpen={isAuthModalOpen}
      onClose={handleCloseModal}
      isCentered
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isLogin ? "Login" : "Registro"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            {isLogin ? (
              <>
                <FormControl isInvalid={errors.email}>
                  <Input
                    placeholder="Email"
                    type="email"
                    value={values.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.password}>
                  <InputGroup size="md">
                    <Input
                      placeholder="Contraseña"
                      type={show ? "text" : "password"}
                      value={values.password}
                      onChange={(e) => handleChange("password", e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
              </>
            ) : (
              <>
                <Tabs
                  index={tabIndex}
                  onChange={setTabIndex}
                  variant="soft-rounded"
                  colorScheme="blue"
                  isFitted
                  isLazy
                >
                  <TabList>
                    <Tab>Cliente</Tab>
                    <Tab>Profesor</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <VStack spacing={3} align="stretch">
                        <HStack>
                          <FormControl isInvalid={errors.nombre}>
                            <Input
                              placeholder="Nombre"
                              value={values.nombre}
                              onChange={(e) =>
                                handleChange("nombre", e.target.value)
                              }
                            />
                            <FormErrorMessage>{errors.nombre}</FormErrorMessage>
                          </FormControl>
                          <FormControl isInvalid={errors.apellido}>
                            <Input
                              placeholder="Apellido"
                              value={values.apellido}
                              onChange={(e) =>
                                handleChange("apellido", e.target.value)
                              }
                            />
                            <FormErrorMessage>
                              {errors.apellido}
                            </FormErrorMessage>
                          </FormControl>
                        </HStack>
                        <HStack>
                          <Input
                            placeholder="Dirección"
                            value={values.direccion}
                            onChange={(e) => handleChange("direccion", e.target.value)}
                          />
                          <InputGroup>
                            <InputRightElement pointerEvents="none">
                              <FaPhoneAlt />
                            </InputRightElement>
                            <Input
                              placeholder="Celular"
                              value={values.celular}
                              onChange={(e) =>
                                handleChange("celular", e.target.value)
                              }
                            />
                          </InputGroup>
                        </HStack>
                        <Input
                          placeholder="Email"
                          type="email"
                          value={values.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                        />
                        <InputGroup size="md">
                          <Input
                            placeholder="Contraseña"
                            type="password"
                            value={values.password}
                            onChange={(e) =>
                              handleChange("password", e.target.value)
                            }
                          />
                          <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                              {show ? "Hide" : "Show"}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                        <Input
                          type="file"
                          accept="image/*, text/*"
                          name="file"
                          placeholder="URL Imagen de Perfil"
                          value={values.imagen}
                          onChange={(e) =>
                            handleChange("imagen", e.target.value)
                          }
                        />
                      </VStack>
                    </TabPanel>
                    <TabPanel>
                      <VStack spacing={3} align="stretch">
                        <HStack>
                          <FormControl isInvalid={errors.nombre}>
                            <Input
                              placeholder="Nombre"
                              value={values.nombre}
                              onChange={(e) =>
                                handleChange("nombre", e.target.value)
                              }
                            />
                            <FormErrorMessage>{errors.nombre}</FormErrorMessage>
                          </FormControl>
                          <FormControl isInvalid={errors.apellido}>
                            <Input
                              placeholder="Apellido"
                              value={values.apellido}
                              onChange={(e) =>
                                handleChange("apellido", e.target.value)
                              }
                            />
                            <FormErrorMessage>
                              {errors.apellido}
                            </FormErrorMessage>
                          </FormControl>
                        </HStack>
                        <HStack>
                          <Input
                            placeholder="Dirección"
                            value={values.direccion}
                            onChange={(e) =>
                              handleChange("direccion", e.target.value)
                            }
                          />
                          <InputGroup>
                            <InputRightElement pointerEvents="none">
                              <FaPhoneAlt />
                            </InputRightElement>
                            <Input
                              placeholder="Celular"
                              value={values.celular}
                              onChange={(e) =>
                                handleChange("celular", e.target.value)
                              }
                            />
                          </InputGroup>
                        </HStack>
                        <Input
                          placeholder="Email"
                          type="email"
                          value={values.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                        />
                        <Input
                          placeholder="Contraseña"
                          type="password"
                          value={values.password}
                          onChange={(e) =>
                            handleChange("password", e.target.value)
                          }
                        />
                        <Input
                          type="file"
                          accept="image/*, text/*"
                          name="file"
                          placeholder="URL Imagen de Perfil"
                          value={values.imagen}
                          onChange={(e) =>
                            handleChange("imagen", e.target.value)
                          }
                        />
                        <Input
                          placeholder="Nro Matricula"
                          value={values.nroMatricula}
                          onChange={(e) =>
                            handleChange("nroMatricula", e.target.value)
                          }
                        />
                        <FormControl display="flex" alignItems="center">
                          <FormLabel htmlFor="instructor" mb="0">
                            Instructor
                          </FormLabel>
                          <Switch
                            id="instructor"
                            value={values.tipoProfesor}
                            onChange={(e) =>
                              handleChange("tipoProfesor", e.target.value)
                            }
                          />
                        </FormControl>
                      </VStack>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </>
            )}
          </VStack>

          <Text
            mt={4}
            fontSize="sm"
            textAlign="center"
            color="blue.500"
            cursor="pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "¿No tienes cuenta? Regístrate"
              : "¿Ya tienes cuenta? Inicia sesión"}
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            isLoading={loading}
            w="full"
            onClick={isLogin ? handleLogin : handleRegister}
          >
            {isLogin ? "Login" : "Registrar"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

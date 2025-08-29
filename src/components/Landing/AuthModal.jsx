import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  VStack,
  Button,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  FormLabel,
  Switch,
  HStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthContext";
import { FaPhoneAlt } from "react-icons/fa";
import { useFormValidation } from "../../utils/useFormValidation";
import { uploadImage } from "../../utils/uploadImage";
import ValidatedInput from "../Landing/ValidateInput";
import PasswordInput from "../Landing/PasswordInput";
import ImageInput from "../Landing/ImageInput";

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, signIn, signUp } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [tabIndex, setTabIndex] = useState(0); // 0 = Cliente, 1 = Profesor
  const [disabledSend, setDisabledSend] = useState(true);
  const toast = useToast();

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
    const requiredFields = isLogin
      ? ["email", "password"]
      : [
          "nombre",
          "apellido",
          "direccion",
          "celular",
          "email",
          "password",
          "imagen",
        ].concat(tabIndex === 1 ? ["nroMatricula", "tipoProfesor"] : []);
    setDisabledSend(
      requiredFields.some((field) => !values[field] || errors[field])
    );
  }, [values, errors, isLogin, tabIndex]);

  const handleSetImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const publicUrl = await uploadImage(file, "images");
      handleChange("imagen", publicUrl);
    } catch (err) {
      Swal.fire({
        title: "Error subiendo la imagen",
        text: err.message,
        icon: "error",
      });
    }
  };

  const handleLogin = async () => {
    const valid = validateForm(["email", "password"]);
    if (!valid) return;
    setLoading(true);
    try {
      await signIn(values.email, values.password);
      toast({
        title: "Login exitoso!",
        variant: "solid",
        isClosable: true,
        position: "bottom-left",
        status: "success",
      });
      handleCloseModal();
    } catch (err) {
      handleCloseModal();
      Swal.fire({ title: "Error", text: err.message, icon: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    const fields = [
      "nombre",
      "apellido",
      "direccion",
      "celular",
      "email",
      "password",
      "imagen",
    ];
    if (tabIndex === 1) fields.push("nroMatricula", "tipoProfesor");
    const valid = validateForm(fields);
    if (!valid) return;

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
      toast({
        title: "Registro exitoso! Por favor, verifica tu correo.!",
        variant: "solid",
        isClosable: true,
        position: "bottom-left",
        status: "success",
      });
      handleCloseModal();
    } catch (err) {
      handleCloseModal();
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
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isLogin ? "Login" : "Registro"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            {isLogin ? (
              <>
                <ValidatedInput
                  field="email"
                  placeholder="Email"
                  type="email"
                  errors={errors}
                  values={values}
                  handleChange={handleChange}
                />
                <PasswordInput
                  field="password"
                  errors={errors}
                  values={values}
                  handleChange={handleChange}
                />
              </>
            ) : (
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
                  {[0, 1].map((idx) => (
                    <TabPanel key={idx}>
                      <VStack spacing={4}>
                        <ImageInput
                          handleSetImage={handleSetImage}
                          previewUrl={values.imagen}
                        />
                        <HStack>
                          <ValidatedInput
                            field="nombre"
                            placeholder="Nombre"
                            errors={errors}
                            values={values}
                            handleChange={handleChange}
                          />
                          <ValidatedInput
                            field="apellido"
                            placeholder="Apellido"
                            errors={errors}
                            values={values}
                            handleChange={handleChange}
                          />
                        </HStack>
                        <HStack>
                          <ValidatedInput
                            field="direccion"
                            placeholder="Dirección"
                            errors={errors}
                            values={values}
                            handleChange={handleChange}
                          />
                          <ValidatedInput
                            field="celular"
                            placeholder="Celular"
                            inputProps={{
                              InputRightElement: <FaPhoneAlt />,
                            }}
                            errors={errors}
                            values={values}
                            handleChange={handleChange}
                          />
                        </HStack>
                        <ValidatedInput
                          field="email"
                          placeholder="Email"
                          type="email"
                          errors={errors}
                          values={values}
                          handleChange={handleChange}
                        />
                        <PasswordInput
                          field="password"
                          errors={errors}
                          values={values}
                          handleChange={handleChange}
                        />
                        {tabIndex === 1 && (
                          <>
                            <ValidatedInput
                              type="nroMatricula"
                              field="nroMatricula"
                              placeholder="Numero de Matricula"
                              errors={errors}
                              values={values}
                              handleChange={handleChange}
                            />
                            <FormControl display="flex" alignItems="center">
                              <FormLabel htmlFor="instructor" mb="0">
                                Instructor
                              </FormLabel>
                              <Switch
                                id="instructor"
                                isChecked={values.tipoProfesor}
                                onChange={(e) =>
                                  handleChange("tipoProfesor", e.target.checked)
                                }
                              />
                            </FormControl>
                          </>
                        )}
                      </VStack>
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            )}
          </VStack>

          <Text
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
            isDisabled={disabledSend}
          >
            {isLogin ? "Login" : "Registrar"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

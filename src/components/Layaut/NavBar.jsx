import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  useDisclosure,
  Stack,
  Group,
  Input,
  Portal,
   Image,
} from "@chakra-ui/react";
import { IoMdMenu, IoMdAdd, IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Links = ["Dashboard", "Cart", "Turns"];

const NavLink = (props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const handleGoToProfile = () => {
    navigate("/profile");
  };
  const [auth, setAuth] = useState(false);
  
  return (
    <>
      <Box>
        <Flex
          h={14}
          p={2}
          alignItems={"center"}
          justifyContent={"space-between"}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <IoMdClose /> : <IoMdMenu />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Image
              src="../../../public/culturista-musculoso-sosteniendo-gran-barra-grandes-pesos.png"
              boxSize="40px"
              fit="cover"
              alt="Pesas"
            />
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Box
                  key={link}
                  as="a"
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                  }}
                  href={"#"}
                >
                  {link}
                </Box>
              ))}
            </HStack>
          </HStack>
          <Group attached w="40%" maxW="sm" borderWidth="1px" rounded="lg">
            <Input flex="1" placeholder="Search" p={2}/>
            <Button bg="bg.subtle" variant="outline">
              Submit
            </Button>
          </Group>
          <Flex alignItems={"center"} justifyContent={"end"}  minW="20%">
            {auth ? (
              <Menu.Root positioning={{ placement: "right-end" }}>
                <Menu.Trigger as={Button} variant={"link"} cursor={"pointer"} rounded="full" focusRing="outside">
                  <Avatar.Root size="sm">
                    <Avatar.Fallback name="Segun Adebayo" />
                    <Avatar.Image src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" />
                  </Avatar.Root>
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      <Menu.Item onClick={handleGoToProfile value="profile">Profile</Menu.Item>
                      <Menu.Item value="settings">Configuracion</Menu.Item>
                      <Menu.Item value="logout" onClick={() => setAuth(false)}>Cerrar Sesion</Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
            ) : (
              <HStack
                flex={{ base: 1, md: 0 }}
                justify={"flex-end"}
                spacing={6}
              >
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  href={"#"}
                  onClick={() => setAuth(true)}
                >
                  Sign In
                </Button>
                <Button
                  as={"a"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"blue.400"}
                  href={"#"}
                  _hover={{
                    bg: "blue.300",
                  }}
                  onClick={() => setAuth(true)}
                >
                  Sign Up
                </Button>
              </HStack>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

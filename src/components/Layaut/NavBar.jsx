import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Input,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";
import AuthModal from "../Landing/AuthModal";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

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
  const { isAuthModalOpen, openAuthModal, closeAuthModal, user, signOut } = useAuth();
  const navigate = useNavigate();
  const handleGoToProfile = () => {
    navigate("/profile");
  };
  const handleSignOut = () => {
    navigate("/");
    signOut();
  };

  console.log(user);
  return (
    <>
      <Box p={2}>
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
          <HStack w="40%" maxW="sm" borderWidth="1px" rounded="lg" spacing={0}>
            <Input flex="1" placeholder="Search" p={2} />
            <Button bg="gray.100" variant="outline">
              Submit
            </Button>
          </HStack>
          <Flex alignItems={"center"} justifyContent={"end"} minW="20%">
            {user?.id ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded="full"
                  variant="link"
                  cursor="pointer"
                >
                  <Avatar
                    size="sm"
                    src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={handleGoToProfile}>Profile</MenuItem>
                  <MenuItem>Configuración</MenuItem>
                  <MenuItem onClick={handleSignOut}>
                    Cerrar Sesión
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
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
                  onClick={() => !user && openAuthModal()}
                >
                  Acceder
                </Button>
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
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </>
  );
}

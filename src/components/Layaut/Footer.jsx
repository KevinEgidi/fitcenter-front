import {
  Box,
  chakra,
  Container,
  VStack,
  HStack,
  Link,
  Text,
  VisuallyHidden,
  Image,
  Flex,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box borderWidth="1px" roundedTop="lg" shadow="lg">
      <Container
        as={VStack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <HStack spacing={6}>
          <Box as="a" href={'#'}>
            Home
          </Box>
          <Box as="a" href={'#'}>
            About
          </Box>
          <Box as="a" href={'#'}>
            Blog
          </Box>
          <Box as="a" href={'#'}>
            Contact
          </Box>
        </HStack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}>
        <Container
          as={VStack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2025 FitCenter. All rights reserved</Text>
          <HStack spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}

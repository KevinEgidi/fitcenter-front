import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Divider,
  VStack,
  HStack,
  Stack,
  Image,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import MembershipPlan from "./MembershipPlan";
import InstructorsSection from "../components/Landing/InstructorsSection";
import ProductsSection from "../components/Landing/ProductsSection";
import AuthModal from "../components/Landing/AuthModal";
import { NavLink } from "react-router-dom";

export default function Landing() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const stats = [
    { label: "400+", description: "Happy Members" },
    { label: "20+", description: "Weekly Classes" },
    { label: "8+", description: "Certified Trainers" },
    { label: "99%", description: "Customer Satisfaction" },
  ];
  return (
    <Box p={4}>
      <Box mt={4} mb={4} bg="blue.50" py={2} px={10} borderRadius="3xl">
        <Stack direction={["column", "row"]} align="center" spacing={10}>
          <VStack align="start" maxW="600px">
            <Heading size="2xl" lineHeight="short">
              Build Strength. Boost Confidence. <br />
              Transform Your Life.
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Join TitanFit and become part of a community that pushes limits
              and inspires greatness.
            </Text>
            <NavLink to="/membership">
              <Button bgColor="blue.500" size="lg">
                Join Now
              </Button>
            </NavLink>
          </VStack>

          <Image
            src="../../public/2150321791.jpg"
            borderRadius="2xl"
            boxSize={["100%", "400px"]}
            objectFit="contain"
            blur="2xl"
          />
        </Stack>
      </Box>
      <HStack>
        <Divider borderColor="gray.300" flex="1" />
      </HStack>
      <SimpleGrid
        my={5}
        columns={[1, 2, 4]}
        spacing={10}
        borderWidth="1px"
        shadow="lg"
        py={10}
        px={8}
        rounded="4xl"
      >
        {stats.map((s, idx) => (
          <VStack key={idx}>
            <Heading size="3xl">{s.label}</Heading>
            <Text>{s.description}</Text>
          </VStack>
        ))}
      </SimpleGrid>
      <HStack>
        <Divider borderColor="gray.300" flex="1" />
        <Text flexShrink="0">Products</Text>
        <Divider borderColor="gray.300" flex="1" />
      </HStack>
      <ProductsSection />
      <HStack>
        <Divider borderColor="gray.300" flex="1" />
        <Text flexShrink="0">Instructors</Text>
        <Divider borderColor="gray.300" flex="1" />
      </HStack>
      <InstructorsSection />
      <HStack>
        <Divider borderColor="gray.300" flex="1" />
        <Text flexShrink="0">Pricing</Text>
        <Divider borderColor="gray.300" flex="1" />
      </HStack>
      <MembershipPlan />
      <AuthModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
}

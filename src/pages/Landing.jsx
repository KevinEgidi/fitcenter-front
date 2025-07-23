import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Separator,
  HStack
} from "@chakra-ui/react";
import AppointmentSelector from "../components/Landing/AppointmentSelector";
import MembershipPlan from "../components/Landing/MembershipPlan";
import InstructorsSection from "../components/Landing/InstructorsSection";
import ProductsSection from "../components/Landing/ProductsSection";

export default function Landing() {
  return (
    <Box>
      <Box
        minH="90vh"
        bgImage="url('https://exude.com/wp-content/uploads/Exude-Fitness-Hero-Banner-Woman-Workout-Situp-Crunches.jpg')"
        bgSize="cover"
        bgPos="center"
        display="flex"
        alignItems="center"
        color="white"
      >
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" fontWeight="700" mb={4}>
            Desata tu potencial
          </Heading>
          <Text fontSize="xl" mb={6}>
            Entrena con los mejores instructores y alcanza tus metas
          </Text>
          <Button colorScheme="blue" size="lg">
            Únete hoy
          </Button>
        </Container>
      </Box>
      <HStack>
         <Separator size="lg" flex="1" />
        <Text flexShrink="0">Turns</Text>
        <Separator size="lg" flex="1" />
      </HStack>
      <AppointmentSelector />
      <HStack>
         <Separator size="lg" flex="1" />
        <Text flexShrink="0">Products</Text>
        <Separator size="lg" flex="1" />
      </HStack>
      <ProductsSection />
      <HStack>
         <Separator size="lg" flex="1" />
        <Text flexShrink="0">Instructors</Text>
        <Separator size="lg" flex="1" />
      </HStack>
      <InstructorsSection />
      <HStack>
         <Separator size="lg" flex="1" />
        <Text flexShrink="0">Pricing</Text>
        <Separator size="lg" flex="1" />
      </HStack>
      <MembershipPlan />
    </Box>
  );
}
import React from "react";

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

export default function Membresia() {
  const plans = [
    {
      title: "Plan Básico",
      price: "$15.000 / mes",
      description: "Acceso ilimitado al gimnasio en horario regular.",
    },
    {
      title: "Plan Plus",
      price: "$20.000 / mes",
      description: "Incluye clases grupales y acceso extendido.",
    },
    {
      title: "Plan Premium",
      price: "$30.000 / mes",
      description:
        "Acceso total, clases personalizadas y beneficios exclusivos.",
    },
  ];

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      py={10}
      px={5}
      bg={("gray.50", "gray.500")}
      minH="100vh"
    >
      <Heading mb={6} color="black.500">
        Membresías
      </Heading>
      <Text fontSize="lg" mb={10} textAlign="center">
        Elige el plan que mejor se adapte a tus objetivos.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full" maxW="6xl">
        {plans.map((plan, index) => (
          <Box
            key={index}
            p={6}
            bg="white"
            rounded="lg"
            shadow="md"
            textAlign="center"
          >
            <Stack spacing={4}>
              <Heading size="md" color="green.500">
                {plan.title}
              </Heading>
              <Text fontSize="2xl" fontWeight="bold">
                {plan.price}
              </Text>
              <Text color="gray.600">{plan.description}</Text>
              <Button colorScheme="green" size="lg">
                Elegir Plan
              </Button>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}

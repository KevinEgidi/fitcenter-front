import React, { useState } from "react";
import {
  Box,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { products } from "../../utils/mocks";

function ProductsSection() {
  return (
    <Box p={8}>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={10}
        align="stretch"
      >
        {products.map((product) => (
          <Box
            key={product.id}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="md"
            overflow="hidden"
            bg="white"
            display="flex"
            flexDirection="column"
            m={2}
            cursor="pointer"
          >
            <Image
              src={product.image}
              alt={product.name}
              objectFit="cover"
              h="200px"
              w="100%"
            />

            <Box p={4} flex="1" display="flex" flexDirection="column" justifyContent="space-between">
              <Text fontWeight="bold" fontSize="xl" mb={2}>
                {product.name}
              </Text>
              <Text fontSize="lg" color="gray.600">
                ${product.price.toFixed(2)}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default ProductsSection
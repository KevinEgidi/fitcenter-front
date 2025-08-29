import { useState } from "react";
import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function Carousel({ items, renderItem, visibleCount = 3 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - visibleCount : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + visibleCount >= items.length ? 0 : prev + 1
    );
  };

  const visibleItems = items.slice(currentIndex, currentIndex + visibleCount);

  return (
    <VStack spacing={4} align="center">
      <HStack spacing={6}>
        <Button onClick={handlePrev}>
          <ChevronLeftIcon boxSize={6} />
        </Button>

        <HStack spacing={6}>
          {visibleItems.map((item, i) => (
            <Box key={i}>{renderItem(item)}</Box>
          ))}
        </HStack>

        <Button onClick={handleNext}>
          <ChevronRightIcon boxSize={6} />
        </Button>
      </HStack>
    </VStack>
  );
}

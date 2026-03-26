import { useState, useEffect } from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Carousel({
  children,
  visibleCount = 4,
  gap = 24,
  showArrows = true,
  showDots = true,
  autoPlay = false,
  autoPlayDelay = 4000,
}) {
  const items = Array.isArray(children) ? children : [children];
  const totalItems = items.length;
  const maxIndex = Math.max(0, totalItems - visibleCount);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index) => setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  const prev = () => goTo(currentIndex - 1);
  const next = () => goTo(currentIndex + 1);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, autoPlayDelay);
    return () => clearInterval(timer);
  }, [autoPlay, autoPlayDelay, maxIndex]);

  const itemWidth = `calc((100% - ${gap * (visibleCount - 1)}px) / ${visibleCount})`;
  const translateX = `calc(-${currentIndex} * (${itemWidth} + ${gap}px))`;

  return (
    <Box position="relative">

      {showArrows && currentIndex > 0 && (
        <IconButton
          aria-label="Previous"
          position="absolute"
          left="-20px"
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          rounded="full"
          size="sm"
          bg="white"
          boxShadow="md"
          _hover={{ bg: "gray.100" }}
          onClick={prev}
        >
          <FiChevronLeft />
        </IconButton>
      )}

      {showArrows && currentIndex < maxIndex && (
        <IconButton
          aria-label="Next"
          position="absolute"
          right="-20px"
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          rounded="full"
          size="sm"
          bg="white"
          boxShadow="md"
          _hover={{ bg: "gray.100" }}
          onClick={next}
        >
          <FiChevronRight />
        </IconButton>
      )}

      <Box overflow="hidden">
        <Flex
          transition="transform 0.4s ease"
          transform={`translateX(${translateX})`}
          gap={`${gap}px`}
        >
          {items.map((child, i) => (
            <Box key={i} flex="0 0 auto" width={itemWidth}>
              {child}
            </Box>
          ))}
        </Flex>
      </Box>

      {showDots && totalItems > visibleCount && (
        <Flex justifyContent="center" gap={2} mt={6}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <Box
              key={i}
              width={currentIndex === i ? "24px" : "8px"}
              height="8px"
              rounded="full"
              bg={currentIndex === i ? "primary.500" : "gray.300"}
              cursor="pointer"
              transition="all 0.3s"
              _hover={{ bg: "primary.500" }}
              onClick={() => goTo(i)}
            />
          ))}
        </Flex>
      )}
    </Box>
  );
}

export default Carousel;

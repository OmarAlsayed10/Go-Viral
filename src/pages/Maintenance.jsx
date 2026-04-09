import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

const Maintenance = () => {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="gray.900"
      color="white"
      px={4}
    >
      <VStack gap={8} textAlign="center">
        <motion.div
          animate={{ rotate: 360, y: [0, -10, 0] }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 4, ease: "linear" },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        >
          <Box color="blue.400" fontSize="80px">
            <FaTools />
          </Box>
        </motion.div>
        <Heading as="h1" size="3xl" fontWeight="bold">
          We'll be back soon!
        </Heading>
        <Text fontSize="xl" color="gray.400" maxW="md">
          Our website is currently down for maintenance as we are making some improvements. Thank you for your patience!
        </Text>
      </VStack>
    </Flex>
  );
};

export default Maintenance;

import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import ProductList from './components/ProductList';

function App() {
  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header */}
      <Box bg="white" shadow="sm" borderBottom="1px" borderColor="gray.200">
        <Container maxW="container.xl" py="6">
          <HStack spacing="4">
            <Box
              w="8"
              h="8"
              bg="brand.500"
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              fontSize="lg"
              fontWeight="bold"
            >
              🏪
            </Box>
            <VStack align="start" spacing="0">
              <Heading size="lg" color="brand.600">
                Toko Online
              </Heading>
              <Text color="gray.600" fontSize="sm">
                Kelola produk toko Anda dengan mudah
              </Text>
            </VStack>
          </HStack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py="8">
        <ProductList />
      </Container>

      {/* Footer */}
      <Box mt="16" bg="white" borderTop="1px" borderColor="gray.200">
        <Container maxW="container.xl" py="6">
          <VStack spacing="2">
            <Text color="gray.600" fontSize="sm">
              © 2025 Toko Online. Dibuat dengan ❤️ menggunakan React & Chakra UI
            </Text>
            <Text color="gray.400" fontSize="xs">
              Backend: Node.js + Express + MongoDB
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
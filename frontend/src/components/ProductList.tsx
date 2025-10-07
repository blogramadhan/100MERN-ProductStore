import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Button,
  useDisclosure,
  Spinner,
  Center,
  Text,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
  Heading,
  Badge,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Product } from '../types/product';
import { productApi } from '../services/api';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await productApi.getProducts();
      setProducts(data);
    } catch (error) {
      setError('Gagal memuat data produk');
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductUpdated = () => {
    fetchProducts();
  };

  if (isLoading) {
    return (
      <Center h="400px">
        <VStack spacing={4}>
          <Spinner size="xl" color="brand.500" />
          <Text>Memuat produk...</Text>
        </VStack>
      </Center>
    );
  }

  if (error) {
    return (
      <Alert status="error" borderRadius="md">
        <AlertIcon />
        <Box>
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Box>
      </Alert>
    );
  }

  return (
    <Box>
      <Flex justify="space-between" align="center" mb="8">
        <Box>
          <Heading size="lg" color="brand.600">
            Daftar Produk
          </Heading>
          <Text color="gray.600" mt="1">
            Kelola produk toko Anda
          </Text>
        </Box>
        <Flex align="center" gap="4">
          <Badge colorScheme="brand" fontSize="sm" px="3" py="1" borderRadius="full">
            {products.length} Produk
          </Badge>
          <Button
            leftIcon={<AddIcon />}
            colorScheme="brand"
            onClick={onOpen}
            size="md"
          >
            Tambah Produk
          </Button>
        </Flex>
      </Flex>

      {products.length === 0 ? (
        <Center h="300px">
          <VStack spacing={4}>
            <Text fontSize="lg" color="gray.500">
              Belum ada produk
            </Text>
            <Text color="gray.400">
              Klik tombol "Tambah Produk" untuk menambahkan produk pertama Anda
            </Text>
            <Button
              leftIcon={<AddIcon />}
              colorScheme="brand"
              variant="outline"
              onClick={onOpen}
            >
              Tambah Produk Pertama
            </Button>
          </VStack>
        </Center>
      ) : (
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
          gap={6}
        >
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onProductUpdated={handleProductUpdated}
            />
          ))}
        </Grid>
      )}

      <ProductForm
        isOpen={isOpen}
        onClose={onClose}
        onProductUpdated={handleProductUpdated}
      />
    </Box>
  );
};

export default ProductList;

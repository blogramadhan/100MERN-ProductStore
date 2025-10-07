import React from 'react';
import {
  Box,
  Image,
  Text,
  Badge,
  Button,
  useDisclosure,
  useToast,
  Flex,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { Product } from '../types/product';
import { productApi } from '../services/api';
import ProductForm from './ProductForm';

interface ProductCardProps {
  product: Product;
  onProductUpdated: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductUpdated }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleDelete = async () => {
    try {
      await productApi.deleteProduct(product._id);
      toast({
        title: 'Produk berhasil dihapus',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      onProductUpdated();
    } catch (error) {
      toast({
        title: 'Gagal menghapus produk',
        description: 'Terjadi kesalahan saat menghapus produk',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="white"
        boxShadow="md"
        transition="all 0.2s"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'xl',
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          height="200px"
          width="100%"
          objectFit="cover"
          fallbackSrc="https://via.placeholder.com/300x200?text=No+Image"
        />

        <Box p="6">
          <Flex align="baseline" mb="2">
            <Badge borderRadius="full" px="2" colorScheme="brand">
              Produk
            </Badge>
          </Flex>

          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={2}
            fontSize="lg"
          >
            {product.name}
          </Text>

          <Text color="brand.600" fontSize="2xl" fontWeight="bold" mt="2">
            Rp {product.price.toLocaleString('id-ID')}
          </Text>

          <Flex mt="4" gap="2">
            <Button
              leftIcon={<EditIcon />}
              colorScheme="blue"
              variant="outline"
              size="sm"
              flex="1"
              onClick={onOpen}
            >
              Edit
            </Button>
            <Button
              leftIcon={<DeleteIcon />}
              colorScheme="red"
              variant="outline"
              size="sm"
              flex="1"
              onClick={handleDelete}
            >
              Hapus
            </Button>
          </Flex>
        </Box>
      </Box>

      <ProductForm
        isOpen={isOpen}
        onClose={onClose}
        product={product}
        onProductUpdated={onProductUpdated}
      />
    </>
  );
};

export default ProductCard;

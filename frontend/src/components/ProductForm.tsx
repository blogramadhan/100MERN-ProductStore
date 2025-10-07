import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
  VStack,
  Text,
  Box,
  Image,
} from '@chakra-ui/react';
import { Product, CreateProductData } from '../types/product';
import { productApi } from '../services/api';

interface ProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product;
  onProductUpdated: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  isOpen,
  onClose,
  product,
  onProductUpdated,
}) => {
  const [formData, setFormData] = useState<CreateProductData>({
    name: '',
    price: 0,
    image: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const isEditMode = !!product;

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        image: product.image,
      });
    } else {
      setFormData({
        name: '',
        price: 0,
        image: '',
      });
    }
  }, [product, isOpen]);

  const handleInputChange = (field: keyof CreateProductData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isEditMode && product) {
        await productApi.updateProduct(product._id, formData);
        toast({
          title: 'Produk berhasil diperbarui',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        await productApi.createProduct(formData);
        toast({
          title: 'Produk berhasil ditambahkan',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
      onProductUpdated();
      onClose();
    } catch (error) {
      toast({
        title: isEditMode ? 'Gagal memperbarui produk' : 'Gagal menambahkan produk',
        description: 'Terjadi kesalahan saat menyimpan produk',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>
            {isEditMode ? 'Edit Produk' : 'Tambah Produk Baru'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Nama Produk</FormLabel>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Masukkan nama produk"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Harga</FormLabel>
                <NumberInput
                  value={formData.price}
                  onChange={(valueString, valueNumber) => handleInputChange('price', valueNumber)}
                  min={0}
                >
                  <NumberInputField placeholder="Masukkan harga" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>URL Gambar</FormLabel>
                <Input
                  value={formData.image}
                  onChange={(e) => handleInputChange('image', e.target.value)}
                  placeholder="Masukkan URL gambar produk"
                />
              </FormControl>

              {formData.image && (
                <Box>
                  <Text fontSize="sm" color="gray.600" mb="2">
                    Preview Gambar:
                  </Text>
                  <Image
                    src={formData.image}
                    alt="Preview"
                    maxH="200px"
                    borderRadius="md"
                    fallbackSrc="https://via.placeholder.com/300x200?text=Invalid+Image"
                  />
                </Box>
              )}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Batal
            </Button>
            <Button
              colorScheme="brand"
              type="submit"
              isLoading={isLoading}
              loadingText={isEditMode ? 'Memperbarui...' : 'Menambahkan...'}
            >
              {isEditMode ? 'Perbarui' : 'Tambah'}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ProductForm;

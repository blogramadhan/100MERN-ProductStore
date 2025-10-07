import axios from 'axios';
import { Product, CreateProductData, UpdateProductData } from '../types/product';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productApi = {
  // Get all products
  getProducts: async (): Promise<Product[]> => {
    const response = await api.get('/products');
    return response.data.data;
  },

  // Create a new product
  createProduct: async (productData: CreateProductData): Promise<Product> => {
    const response = await api.post('/products', productData);
    return response.data.data;
  },

  // Update a product
  updateProduct: async (id: string, productData: UpdateProductData): Promise<void> => {
    await api.put(`/products/${id}`, productData);
  },

  // Delete a product
  deleteProduct: async (id: string): Promise<void> => {
    await api.delete(`/products/${id}`);
  },
};

export default api;

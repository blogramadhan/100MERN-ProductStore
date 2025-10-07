export interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductData {
  name: string;
  price: number;
  image: string;
}

export interface UpdateProductData {
  name?: string;
  price?: number;
  image?: string;
}

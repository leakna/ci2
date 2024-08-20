
export interface Product {
  id: number;
  title: string;
  images: string[];
  // Add other fields as needed
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

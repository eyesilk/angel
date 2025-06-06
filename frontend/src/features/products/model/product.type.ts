export interface Product {
  id: string;
  name: string;
  price: number;
  sizes?: string[];
  description?: string;
  country?: string;
  composition?: string;
  instructions?: string;
  gender?: string;
  category?: string;
  color?: string;
  imageUrl?: string;
  brandId?: string;
  views?: number;
  brand?: { name: string };
}

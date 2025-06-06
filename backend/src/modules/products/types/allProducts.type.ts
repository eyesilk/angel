export interface AllProductsType {
  id: string;
  name: string;
  price: number;
  brand: {
    id: string;
    name: string;
  };
  imageUrl: string;
}

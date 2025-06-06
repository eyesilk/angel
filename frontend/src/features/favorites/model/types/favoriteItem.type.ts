export interface FavoriteItem {
  id: string;
  productId: string;
  favoriteId: string;
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  };
}

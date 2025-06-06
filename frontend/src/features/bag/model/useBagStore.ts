import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { CartItem } from './types/cartItem.type';
import { devtools } from 'zustand/middleware';

interface BagState {
  isBagOpen: boolean;
  bagProducts: CartItem[];
  setIsBagOpen: () => void;
  setBagProducts: (bagProducts: CartItem[]) => void;
  decrBagProduct: (id: string, size: string) => void;
  addProductToBag: (bagProduct: CartItem) => void;
  removeProductFromBag: (id: string, size: string) => void;
}

export const useBagStore = create<BagState>()(
  devtools(
    immer((set) => ({
      isBagOpen: false,
      bagProducts: [],
      setIsBagOpen: () =>
        set((state) => {
          state.isBagOpen = !state.isBagOpen;
        }),
      setBagProducts: (bagProducts: CartItem[]) =>
        set((state) => {
          state.bagProducts = bagProducts;
        }),
      addProductToBag: (bagProduct: CartItem) =>
        set((state) => {
          const findedProduct = state.bagProducts.find(
            (product) =>
              product.productId === bagProduct.productId && product.size === bagProduct.size,
          );
          if (findedProduct) {
            state.bagProducts = state.bagProducts.map((product) =>
              product.productId === bagProduct.productId && product.size === bagProduct.size
                ? { ...product, quantity: product.quantity + 1 }
                : product,
            );
          } else {
            state.bagProducts.push(bagProduct);
          }
        }),
      decrBagProduct: (id: string, size: string) =>
        set((state) => {
          state.bagProducts = state.bagProducts.map((product) =>
            product.productId === id && product.size === size
              ? { ...product, quantity: product.quantity - 1 }
              : product,
          );
        }),
      removeProductFromBag: (id: string, size: string) =>
        set((state) => {
          state.bagProducts = state.bagProducts.filter(
            (product) => !(product.productId === id && product.size === size),
          );
        }),
    })),
  ),
);

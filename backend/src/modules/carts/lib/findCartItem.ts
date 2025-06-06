import ApiError from '@/exceptions/api-error';
import prisma from '@/lib/prisma';
import findAndCheckUser from '@/utils/findAndCheckUser,';
import { Cart, CartItem, User } from '@prisma/client';

export default async (userId: string, productId: string, size: string): Promise<CartItem> => {
  const user: User = await findAndCheckUser(userId);

  const cart: Cart | null = await prisma.cart.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (!cart) {
    throw ApiError.BadRequest('Корзина пользователя не найдена');
  }

  const cartItem: CartItem | null = await prisma.cartItem.findUnique({
    where: {
      cartId_productId_size: {
        cartId: cart.id,
        productId,
        size,
      },
    },
  });

  if (!cartItem) {
    throw ApiError.BadRequest('Товар не найден в корзине');
  }

  return cartItem;
};

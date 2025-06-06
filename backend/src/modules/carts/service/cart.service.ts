import ApiError from '@/exceptions/api-error';
import prisma from '@/lib/prisma';
import { Cart, CartItem, User } from '@prisma/client';
import findCartItem from '../lib/findCartItem';
import findAndCheckUser from '@/utils/findAndCheckUser,';

class CartService {
  async getCart(userId: string): Promise<Cart> {
    const user: User = await findAndCheckUser(userId);
    let cart: Cart | null;
    cart = await prisma.cart.findUnique({
      where: {
        userId: user.id,
      },
      include: { cartItems: true },
    });
    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          userId: user.id,
        },
      });
    }
    return cart;
  }
  async addProductToCart(userId: string, productId: string, size: string): Promise<void> {
    const user: User = await findAndCheckUser(userId);
    const product = await prisma.product.findUnique({ where: { id: productId } });

    if (!product) throw ApiError.BadRequest('Товара не существует');

    let cart: Cart | null = await prisma.cart.findUnique({ where: { userId: user.id } });

    if (!cart) {
      cart = await prisma.cart.create({ data: { userId: user.id } });
    }

    await prisma.cartItem.upsert({
      where: {
        cartId_productId_size: { cartId: cart.id, productId, size },
      },
      update: {
        quantity: { increment: 1 },
      },
      create: {
        productId,
        cartId: cart.id,
        size,
        imageUrl: product.imageUrl,
        name: product.name,
        price: product.price,
        quantity: 1,
      },
    });
  }
  async incrProductToCart(userId: string, productId: string, size: string): Promise<void> {
    const user: User = await findAndCheckUser(userId);
    const product = await prisma.product.findUnique({ where: { id: productId } });

    if (!product) throw ApiError.BadRequest('Товара не существует');

    let cart: Cart | null = await prisma.cart.findUnique({ where: { userId: user.id } });

    if (!cart) {
      cart = await prisma.cart.create({ data: { userId: user.id } });
    }

    await prisma.cartItem.update({
      where: {
        cartId_productId_size: { cartId: cart.id, productId, size },
      },
      data: {
        quantity: {
          increment: 1,
        },
      },
    });
  }
  async decrementProductFromCart(userId: string, productId: string, size: string): Promise<void> {
    const cartItem: CartItem = await findCartItem(userId, productId, size);

    if (cartItem?.quantity > 1) {
      await prisma.cartItem.update({
        where: {
          id: cartItem.id,
        },
        data: {
          quantity: {
            decrement: 1,
          },
        },
      });
      return;
    }
    await prisma.cartItem.delete({
      where: {
        id: cartItem.id,
      },
    });
  }
  async deleteProductFromCart(userId: string, productId: string, size: string): Promise<void> {
    const cartItem: CartItem = await findCartItem(userId, productId, size);

    await prisma.cartItem.delete({
      where: {
        id: cartItem.id,
      },
    });
  }
  async clearCart(userId: string): Promise<void> {
    const cart: Cart | null = await prisma.cart.findUnique({
      where: {
        userId,
      },
    });
    if (!cart) {
      throw ApiError.BadRequest('Корзина пользователя не найдена');
    }
    if (cart.userId !== userId) {
      throw ApiError.UnauthorizedError();
    }

    await prisma.cartItem.deleteMany({
      where: {
        cartId: cart.id,
      },
    });
  }
}

const cartService = new CartService();

export default cartService;

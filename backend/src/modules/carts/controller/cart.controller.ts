import { NextFunction, Request, Response } from 'express';
import cartService from '../service/cart.service';
import { Cart } from '@prisma/client';

class CartController {
  async getCart(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId: string = req.user?.id!;

      const cart: Cart = await cartService.getCart(userId);

      res.status(200).json(cart);
    } catch (err: unknown) {
      next(err);
    }
  }
  async addProductToCart(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const productId: string = req.body.productId;
      const size: string = req.body.size;
      const userId: string = req.user?.id!;

      await cartService.addProductToCart(userId, productId, size);
      res.status(200).json({ message: 'Товар добавлен в корзину' });
    } catch (err: unknown) {
      next(err);
    }
  }
  async incrProductToCart(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const productId: string = req.body.productId;
      const size: string = req.body.size;
      const userId: string = req.user?.id!;

      await cartService.incrProductToCart(userId, productId, size);
      res.status(200).json({ message: 'Товар добавлен в корзину' });
    } catch (err: unknown) {
      next(err);
    }
  }
  async decrementProductFromCart(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const productId: string = req.body.productId;
      const size: string = req.body.size;
      const userId: string = req.user?.id!;

      await cartService.decrementProductFromCart(userId, productId, size);
      res.status(200).json({ message: 'Товар удален из корзины' });
    } catch (err: unknown) {
      next(err);
    }
  }
  async deleteProductFromCart(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const productId: string = req.body.productId;
      const size: string = req.body.size;
      const userId: string = req.user?.id!;

      await cartService.deleteProductFromCart(userId, productId, size);
      res.status(200).json({ message: 'Товар удален из корзины' });
    } catch (err: unknown) {
      next(err);
    }
  }
  async clearCart(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId: string = req.user?.id!;

      await cartService.clearCart(userId);

      res.status(200).json({ message: 'Корзина очищена' });
    } catch (err: unknown) {
      next(err);
    }
  }
}

const cartController = new CartController();

export default cartController;

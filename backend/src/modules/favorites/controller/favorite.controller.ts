import { NextFunction, Request, Response } from 'express';
import favoriteService from '../service/favorite.service';
import { Favorite } from '@prisma/client';

class FavoriteController {
  async getFavorite(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId: string = req.user?.id!;

      const favorite: Favorite = await favoriteService.getFavorite(userId);

      res.status(200).json(favorite);
    } catch (err: unknown) {
      next(err);
    }
  }

  async addFavoriteItem(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId: string = req.user?.id!;
      const productId: string = req.params.id;

      await favoriteService.addFavoriteItem(productId, userId);

      res.status(200).json({ message: 'Товар добавлен в избранные' });
    } catch (err: unknown) {
      next(err);
    }
  }

  async removeFavoriteItem(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId: string = req.user?.id!;
      const productId: string = req.params.id;

      await favoriteService.removeFavoriteItem(productId, userId);

      res.status(200).json({ message: 'Товар удален из избранных' });
    } catch (err: unknown) {
      next(err);
    }
  }

  async clearFavorite(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      console.log('is ok?');
      const userId: string = req.user?.id!;

      await favoriteService.clearFavorite(userId);

      res.status(200).json({ message: 'Избранные очищены' });
    } catch (err: unknown) {
      next(err);
    }
  }

  async checkFavorite(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId: string = req.user?.id!;
      const productId: string = req.params.id;

      const isFavorite: boolean = await favoriteService.checkFavorite(productId, userId);

      res.status(200).json(isFavorite);
    } catch (err: unknown) {
      next(err);
    }
  }
}

const favoriteController = new FavoriteController();

export default favoriteController;

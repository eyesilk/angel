import express from 'express';
import authMiddleware from '@/middlewares/auth.middleware';
import favoriteController from '../controller/favorite.controller';

const router = express.Router();

router.get('/', authMiddleware, favoriteController.getFavorite);
router.put('/add/:id', authMiddleware, favoriteController.addFavoriteItem);
router.delete('/delete/:id', authMiddleware, favoriteController.removeFavoriteItem);
router.delete('/clear', authMiddleware, favoriteController.clearFavorite);
router.get('/check/:id', authMiddleware, favoriteController.checkFavorite);

export { router as favoriteRouter };

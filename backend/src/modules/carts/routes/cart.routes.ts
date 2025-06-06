import express from "express";
import cartController from "../controller/cart.controller";
import authMiddleware from "@/middlewares/auth.middleware";

const router = express.Router() 
router.put('/add', authMiddleware, cartController.addProductToCart);
router.put('/increment', authMiddleware, cartController.incrProductToCart);
router.delete('/decrement', authMiddleware, cartController.decrementProductFromCart);
router.delete('/delete', authMiddleware, cartController.deleteProductFromCart);
router.get('/', authMiddleware, cartController.getCart);
router.delete('/clear', authMiddleware, cartController.clearCart)

export { router as cartRouter };

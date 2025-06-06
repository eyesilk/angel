import express from "express";
import productController from '../controller/product.controller';

const router = express.Router() 

router.get('/', productController.getProducts);
router.get('/:id', productController.getSingleProduct);

export { router as productRouter };

import express from "express";
import brandController from "../controller/brand.controller";

const router = express.Router() 
router.get('/gender/:gender', brandController.getAllBrands);
router.get('/id/:id', brandController.getSingleBrand);
router.get('/popular', brandController.getPopularBrands);
router.get('/categories/:id', brandController.getCategoriesByBrand);

export { router as brandRouter };

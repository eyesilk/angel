import { Request, Response, NextFunction } from 'express';
import productService from '../service/product.service';
import { CategoryEnum, ColorEnum, GenderEnum, Product } from '@prisma/client';
import { AllProductsType } from '../types/allProducts.type';

class ProductController {
  async getProducts(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const sortBy = req.query.sortBy as string | 'views';
      const order = req.query.order as string | 'asc';
      const name = req.query.name as string | '';
      const category = (req.query.category as CategoryEnum) || undefined;
      const color = (req.query.color as ColorEnum) || undefined;
      const gender = (req.query.gender as GenderEnum) || undefined;
      const brandId = (req.query.brandId as string) || undefined;
      const limit = Number(req.query.limit) || 100;
      const page = Number(req.query.page) || 1;

      const productData: { products: AllProductsType[]; totalCount: number } = await productService.getProducts(
        limit,
        page,
        sortBy,
        order,
        name,
        category,
        color,
        gender,
        brandId,
      );

      res.status(200).json(productData);
    } catch (err: unknown) {
      next(err);
    }
  }

  async getSingleProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id: string = req.params.id;

      const product: Product = await productService.getSingleProduct(id);

      res.status(200).json(product);
    } catch (err: unknown) {
      next(err);
    }
  }
}

const productController = new ProductController();

export default productController;

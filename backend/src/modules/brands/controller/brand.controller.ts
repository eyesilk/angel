import { NextFunction, Request, Response } from 'express';
import brandServices from '../service/brand.service';
import { Brand, GenderEnum } from '@prisma/client';
import { AllBrandsType } from '../types/allBrands.type';

class BrandController {
  async getAllBrands(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const gender: GenderEnum | '*' = req.params.gender as GenderEnum | '*';

      const brands: AllBrandsType[] = await brandServices.getAllBrands(gender!);
      res.status(200).json(brands);
    } catch (err: unknown) {
      next(err);
    }
  }
  async getSingleBrand(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id: string = req.params.id;
      const brand: Brand = await brandServices.getSingleBrand(id);
      res.status(200).json(brand);
    } catch (err: unknown) {
      next(err);
    }
  }
  async getPopularBrands(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const brand: Brand[] = await brandServices.getPopularBrands();
      res.status(200).json(brand);
    } catch (err: unknown) {
      next(err);
    }
  }
  async getCategoriesByBrand(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id: string = req.params.id;
      const categories: { categories: string[]; colors: string[] } =
        await brandServices.getCategoriesByBrand(id);
      res.status(200).json(categories);
    } catch (err: unknown) {
      next(err);
    }
  }
}

const brandController = new BrandController();

export default brandController;

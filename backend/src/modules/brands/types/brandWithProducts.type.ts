import { Brand, CategoryEnum, ColorEnum } from '@prisma/client';

export interface BrandWithCategories extends Brand {
  products: { category: CategoryEnum; color: ColorEnum }[];
}

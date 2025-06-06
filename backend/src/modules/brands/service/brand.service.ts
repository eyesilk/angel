import ApiError from '@/exceptions/api-error';
import prisma from '@/lib/prisma';
import { Brand, GenderEnum, Prisma } from '@prisma/client';
import { AllBrandsType } from '../types/allBrands.type';
import { BrandWithCategories } from '../types/brandWithProducts.type';

class BrandService {
  async getAllBrands(gender?: GenderEnum | '*'): Promise<AllBrandsType[]> {
    const whereCondition: Prisma.BrandWhereInput =
      !gender || gender === '*'
        ? {}
        : {
            products: {
              some: {
                gender: {
                  in:
                    gender === 'Муж'
                      ? [GenderEnum.Муж, GenderEnum.Уни]
                      : gender === 'Жен'
                        ? [GenderEnum.Жен, GenderEnum.Уни]
                        : [],
                },
              },
            },
          };

    const allBrands: AllBrandsType[] = await prisma.brand.findMany({
      where: whereCondition,
      select: { id: true, name: true },
    });

    if (allBrands.length === 0) {
      throw ApiError.BadRequest('Бренды не были найдены');
    }

    return allBrands;
  }

  async getSingleBrand(id: string): Promise<Brand> {
    const brand: Brand | null = await prisma.brand.findUnique({
      where: { id },
    });
    if (!brand) {
      throw ApiError.BadRequest('Бренд не был найден');
    }
    return brand;
  }
  async getPopularBrands(): Promise<Brand[]> {
    const brand: Brand[] | null = await prisma.brand.findMany({
      where: {
        landingImageUrl: { not: null },
      },
    });
    if (!brand) {
      throw ApiError.BadRequest('Бренд не был найден');
    }
    return brand;
  }
  async getCategoriesByBrand(id: string): Promise<{ categories: string[]; colors: string[] }> {
    let brand: BrandWithCategories[] | null;

    if (id === '*') {
      brand = await prisma.brand.findMany({
        include: { products: { select: { category: true, color: true } } },
      });
    } else if (id === 'man') {
      brand = await prisma.brand.findMany({
        include: {
          products: {
            where: { OR: [{ gender: 'Муж' }, { gender: 'Уни' }] },
            select: { category: true, color: true },
          },
        },
      });
    } else if (id === 'woman') {
      brand = await prisma.brand.findMany({
        include: {
          products: {
            where: { OR: [{ gender: 'Жен' }, { gender: 'Уни' }] },
            select: { category: true, color: true },
          },
        },
      });
    } else {
      brand = await prisma.brand.findMany({
        where: {
          id,
        },
        include: { products: { select: { category: true, color: true } } },
      });
    }

    if (!brand) {
      throw ApiError.BadRequest('Бренд не был найден');
    }

    const categories = new Set<string>();
    const colors = new Set<string>();

    brand.forEach((brand) => {
      brand.products.forEach((product) => {
        if (product.category) categories.add(product.category);
        if (product.color) colors.add(product.color);
      });
    });

    return {
      categories: Array.from(categories),
      colors: Array.from(colors),
    };
  }
}

const brandServices = new BrandService();

export default brandServices;

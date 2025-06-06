import ApiError from '@/exceptions/api-error';
import prisma from '@/lib/prisma';
import { CategoryEnum, ColorEnum, GenderEnum, Prisma, Product } from '@prisma/client';
import { AllProductsType } from '../types/allProducts.type';

class ProductService {
  async getProducts(
    limit: number,
    page: number,
    sortBy: string,
    order: string,
    name: string,
    category?: CategoryEnum,
    color?: ColorEnum,
    gender?: GenderEnum,
    brandId?: string
  ): Promise<{ products: AllProductsType[]; totalCount: number }> 
  async getProducts(
    limit: number,
    page: number,
    sortBy: string,
    order: string,
    name: string,
    category?: CategoryEnum,
    color?: ColorEnum,
    gender?: GenderEnum,
    brandId?: string
  ): Promise<{ products: AllProductsType[]; totalCount: number }> {
    const offset: number = (page - 1) * limit;

    let genderFilter: Prisma.EnumGenderEnumFilter | undefined = undefined;
    if (gender === 'Муж' || gender === 'Жен') {
      genderFilter = { in: [gender, 'Уни'] }; 
    } else if (gender) {
      genderFilter = { equals: gender }; 
    }

    const where: Prisma.ProductWhereInput = {
      name: {
        contains: name,
        mode: Prisma.QueryMode.insensitive,
      },
      category,
      color,
      gender: genderFilter, 
      brandId,
    };

    const totalCount: number = await prisma.product.count({ where });

    const products: AllProductsType[] = await prisma.product.findMany({
      take: limit,
      skip: offset,
      where,
      orderBy: { [sortBy]: order },
      select: {
        id: true,
        name: true,
        price: true,
        brand: { select: { id: true, name: true } },
        imageUrl: true,
      },
    });

    return { products, totalCount };
  }

  async getSingleProduct(id: string): Promise<Product> {
    const product: Product | null = await prisma.product.update({
      where: { id },
      include: { brand: {select: { name: true }}},
      data: {
        views: {
          increment: 1,
        },
      },
    });
    if (!product) {
      throw ApiError.BadRequest('Товар не найден');
    }
    return product;
  }
}

const productService = new ProductService();

export default productService;

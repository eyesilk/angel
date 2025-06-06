import { axios } from '../../../shared/utils';
import { Product } from '../model/product.type';

export default class ProductApi {
  static async getProducts(
    brandId?: string | null,
    categoryName?: string | null,
    colorName?: string | null,
    sortBy?: string | null,
    orderBy?: string | null,
    genderName?: string | null,
    pageValue?: number | null,
  ): Promise<{ products: Product[]; totalCount: number }> {
    const brand: string = brandId ? `&brandId=${brandId}` : '';
    const category: string = categoryName ? `&category=${categoryName}` : '';
    const color: string = colorName ? `&color=${colorName}` : '';
    const sort: string = sortBy ? `&sortBy=${sortBy}` : '';
    const order: string = orderBy ? `&order=${orderBy}` : '';
    const gender: string = genderName ? `&gender=${genderName}` : '';
    const page: string = pageValue ? `&page=${pageValue}` : '&page=1';

    const { data } = await axios.get(
      `/product?limit=10${page}${brand}${category}${color}${sort}${order}${gender}`,
    );

    return data;
  }

  static async getSingleProduct(productId: string): Promise<Product> {
    const { data } = await axios.get(`/product/${productId}`);

    return data;
  }
}

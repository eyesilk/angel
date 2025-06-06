import { axios } from '../../../shared/utils';
import { Brand } from '../model/brand.type';

export default class BrandApi {
  static async getBrandList(genderName?: string | null): Promise<Brand[]> {
    const gender = genderName ? genderName : '*';

    const { data } = await axios.get(`/brand/gender/${gender}`);

    return data;
  }

  static async getPopularBrands(): Promise<Brand[]> {
    const { data } = await axios.get(`/brand/popular`);

    return data;
  }

  static async getSingleBrand(id: string): Promise<Brand> {
    const { data } = await axios.get(`/brand/id/${id}`);

    return data;
  }
}

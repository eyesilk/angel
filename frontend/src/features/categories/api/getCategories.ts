import { axios } from '../../../shared/utils';
import { Categories } from '../model/categories.type';

export default class CategoriesApi {
  static async getCategories(id: string): Promise<Categories> {
    const { data } = await axios.get(`/brand/categories/${id}`);

    return data;
  }
}


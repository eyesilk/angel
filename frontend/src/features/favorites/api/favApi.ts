import { axios } from '../../../shared/utils';
import { FavoriteItem } from '../model/types/favoriteItem.type';

export class FavApi {
  static async getFav(): Promise<FavoriteItem[]> {
    const { data } = await axios.get<{ favoriteItems: FavoriteItem[] }>('/favorite/');

    return data.favoriteItems;
  }

  static async checkFav(productId: string): Promise<boolean> {
    const { data } = await axios.get(`/favorite/check/${productId}`);

    return data;
  }

  static async addFav(productId: string): Promise<{ message: string }> {
    const { data } = await axios.put(`/favorite/add/${productId}`);

    return data;
  }

  static async removeFav(productId: string): Promise<{ message: string }> {
    const { data } = await axios.delete(`/favorite/delete/${productId}`);

    return data;
  }

  static async clearFav(): Promise<{ message: string }> {
    const { data } = await axios.delete(`/favorite/clear`);

    return data;
  }
}

import { axios } from '../../../shared/utils';
import { CartItem } from '../model/types/cartItem.type';

export class BagApi {
  static async getBag(): Promise<CartItem[]> {
    const { data } = await axios.get<{ cartItems: CartItem[] }>('/cart');
    return data.cartItems;
  }

  static async addToBag(fields: { productId: string; size: string }): Promise<void> {
    await axios.put('/cart/add', fields);
  }

  static async incrToBag(fields: { productId: string; size: string }): Promise<void> {
    await axios.put('/cart/increment', fields);
  }

  static async decrFromBag(fields: { productId: string; size: string }): Promise<void> {
    await axios.delete('/cart/decrement', { data: fields });
  }

  static async removeFromBag(fields: { productId: string; size: string }): Promise<void> {
    await axios.delete('/cart/delete', { data: fields });
  }
}

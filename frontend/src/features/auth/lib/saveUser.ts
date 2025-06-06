import { User } from '../model/types/user.type';

export const saveUser = (user: User): void => {
  sessionStorage.setItem('user', JSON.stringify(user));
};

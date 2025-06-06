import { User } from '../model/types/user.type';

export const getUser = (): User | null => {
  let userData: User | null;
  const data = sessionStorage.getItem('user');
  userData = data ? JSON.parse(data) : null;
  return userData;
};

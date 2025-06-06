import { User } from '@prisma/client';
import { UserDtoType } from '../types/user.dto.type';

class UserDto implements UserDtoType {
  username: string;
  email: string;
  isActivated: boolean;
  id: string;
  role: string;

  constructor(model: User) {
    this.username = model.username;
    this.email = model.email;
    this.id = model.id;
    this.isActivated = model.isActivated;
    this.role = model.role;
  }
}

export default UserDto;

import { UserDtoType } from '../modules/auths/types/user.dto.type';
import { Express } from '@/@types/express';

declare module 'express' {
  interface Request {
    user?: UserDtoType;
  }
}

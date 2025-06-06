import ApiError from '@/exceptions/api-error';
import { UserDtoType } from '@/modules/auths/types/user.dto.type';
import tokenService from '@/modules/auths/services/token.service';
import { NextFunction, Response, Request } from 'express';

export default (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token: string = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if (!token) {
      next(ApiError.UnauthorizedError());
      return;
    }

    const userData: UserDtoType | null = tokenService.validateAccessToken(token);

    if (!userData) {
      next(ApiError.UnauthorizedError());
      return;
    }

    req.user = userData;

    next();
  } catch (err: unknown) {
    next(ApiError.UnauthorizedError);
    return;
  }
};

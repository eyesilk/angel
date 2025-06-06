import ApiError from '@/exceptions/api-error';
import { NextFunction, Response, Request } from 'express';
import { Result, ValidationError, validationResult } from 'express-validator';

export default (req: Request, res: Response, next: NextFunction): void => {
  const errors: Result<ValidationError> = validationResult(req);

  if (!errors.isEmpty()) {
    throw ApiError.BadRequest(errors.array()[0].msg, errors.array())
  }

  next();
};

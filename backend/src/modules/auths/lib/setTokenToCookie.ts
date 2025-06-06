import { Response } from 'express';

export default (res: Response, refreshToken: string): void => {
  res.cookie('refreshToken', refreshToken, {
    maxAge: 32 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: process.env.SAME_SITE as boolean | 'lax' | 'strict' | 'none',
    path: '/',
  });
};

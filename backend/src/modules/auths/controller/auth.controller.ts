import { NextFunction, Request, Response } from 'express';
import authServices from '../services/auth.service';
import { UserDtoType } from '../types/user.dto.type';
import { TokensType } from '../types/tokens.type';
import { Token } from '@prisma/client';
import setTokenToCookie from '../lib/setTokenToCookie';

class AuthController {
  async registration(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { username, password, email } = req.body;
      const userData: { tokens: TokensType; user: UserDtoType } = await authServices.registartion(
        username,
        email,
        password,
      );

      setTokenToCookie(res, userData.tokens.refreshToken);

      
      res
        .status(200)
        .json({ message: 'Для активации аккаунта подвтердите письмо по почте.', ...userData });
      return;
    } catch (err: unknown) {
      next(err);
    }
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, password } = req.body;
      const userData: { tokens: TokensType; user: UserDtoType } = await authServices.login(
        email,
        password,
      );

      setTokenToCookie(res, userData.tokens.refreshToken);

      res.status(200).json(userData);
      return;
    } catch (err: unknown) {
      next(err);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { refreshToken } = req.cookies;
      const token: Token = await authServices.logout(refreshToken);
      res.clearCookie('refreshToken');
      res.status(200).json({ message: 'Выход из аккаунта произошел успешно.', token });
      return;
    } catch (err: unknown) {
      next(err);
    }
  }

  async activate(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const activationLink: string = req.params.link as string;
      const refreshToken: string = await authServices.activate(activationLink);
      setTokenToCookie(res, refreshToken);
      res.status(200).json({ message: 'Активация прошла успешно' });
    } catch (err: unknown) {
      next(err);
    }
  }

  async refresh(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { refreshToken } = req.cookies;

      const userData: { tokens: TokensType; user: UserDtoType } =
        await authServices.refresh(refreshToken);

      setTokenToCookie(res, userData.tokens.refreshToken);

      res.status(200).json(userData);
    } catch (err: unknown) {
      next(err);
    }
  }

  async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userData: UserDtoType = req.user!;
      const user: UserDtoType = await authServices.getUser(userData.id);
      res.status(200).json(user);
    } catch (err: unknown) {
      next(err);
    }
  }

  async changeName(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId: string = req.user?.id!;
      const newName: string = req.body.username;

      const newUserData: { tokens: TokensType; user: UserDtoType } = await authServices.changeName(
        userId,
        newName,
      );

      setTokenToCookie(res, newUserData.tokens.refreshToken);

      res.status(200).json(newUserData);
    } catch (err: unknown) {
      next(err);
    }
  }

  async changePass(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId: string = req.user?.id!;
      const password: string = req.body.password;
      const newPassword: string = req.body.newPassword;

      const newUserData: { tokens: TokensType; user: UserDtoType } = await authServices.changePass(
        userId,
        password,
        newPassword,
      );

      setTokenToCookie(res, newUserData.tokens.refreshToken);

      res.status(200).json(newUserData);
    } catch (err: unknown) {
      next(err);
    }
  }

  async changeEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId: string = req.user?.id!;
      const password: string = req.body.password;
      const newEmail: string = req.body.email;

      await authServices.changeEmail(userId, password, newEmail);

      res.status(200).json({ message: 'Чтобы изменения вошли в силу, подтвердите письмо' });
    } catch (err: unknown) {
      next(err);
    }
  }

  async activateEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const activationLink: string = req.params.link;
      const userId: string = req.user?.id!;

      const newUserData: { tokens: TokensType; user: UserDtoType } =
        await authServices.activateEmail(activationLink, userId);

      setTokenToCookie(res, newUserData.tokens.refreshToken);

      res.status(200).json(newUserData);
    } catch (err: unknown) {
      next(err);
    }
  }
}

const authController = new AuthController();

export default authController;

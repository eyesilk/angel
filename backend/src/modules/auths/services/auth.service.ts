import prisma from '@/lib/prisma';
import hashPassword from '@/modules/auths/lib/hashPassword';
import { Token, User } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import mailService from './mail.service';
import tokenService from './token.service';
import { UserDtoType } from '../types/user.dto.type';
import { TokensType } from '../types/tokens.type';
import ApiError from '@/exceptions/api-error';
import bcrypt from 'bcrypt';
import generateAndSaveTokens from '@/modules/auths/lib/generateAndSaveTokens';
import UserDto from '../dtos/user.dto';
import findAndCheckUser from '../../../utils/findAndCheckUser,';

class AuthService {
  async registartion(
    username: string,
    email: string,
    password: string,
  ): Promise<{ tokens: TokensType; user: UserDtoType }> {
    const condidate: User | null = await prisma.user.findUnique({
      where: { email },
    });
    if (condidate) {
      throw ApiError.BadRequest(`Пользователь с почтой ${email} уже существует`);
    }
    const passwordHash: string = await hashPassword(password, 5);
    const activationLink: string = uuidv4();

    await mailService.sendActivationEmail(
      email,
      `${process.env.CLIENT_URL}/activate/${activationLink}`,
      username,
    );

    const user: User = await prisma.user.create({
      data: {
        username,
        email,
        passwordHash,
        isActivated: false,
        activationLink,
      },
    });

    return generateAndSaveTokens(user);
  }

  async login(email: string, password: string): Promise<{ tokens: TokensType; user: UserDtoType }> {
    const user: User | null = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw ApiError.BadRequest('Неправильные почта или пароль');
    }
    const isCorrectPassword: boolean = await bcrypt.compare(password, user.passwordHash);
    if (!isCorrectPassword) {
      throw ApiError.BadRequest('Неправильные почта или пароль');
    }
    if (!user.isActivated) {
      throw ApiError.BadRequest('Требуется подвтерждение по почте');
    }
    return generateAndSaveTokens(user);
  }

  async activate(activationLink: string): Promise<string> {
    const user = await prisma.user.update({
      where: { activationLink },
      data: { isActivated: true },
    });
    if (!user) {
      throw ApiError.BadRequest('Неккорректная ссылка для активации');
    }
    await prisma.cart.create({
      data: {
        userId: user.id,
      },
    });
    await prisma.favorite.create({
      data: {
        userId: user.id,
      },
    });
    const userData = await generateAndSaveTokens(user);

    return userData.tokens.refreshToken;
  }

  async logout(refreshToken: string): Promise<Token> {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken: string): Promise<{ tokens: TokensType; user: UserDtoType }> {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData: UserDtoType | null = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDB: Token | null = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDB) {
      throw ApiError.UnauthorizedError();
    }
    const user: User | null = await prisma.user.findUnique({
      where: {
        id: userData.id,
      },
    });
    if (!user) {
      throw ApiError.BadRequest('Пользователь не найден');
    }
    return generateAndSaveTokens(user);
  }

  async getUser(userId: string): Promise<UserDtoType> {
    const user: User = await findAndCheckUser(userId);

    const userData: UserDtoType = new UserDto(user);

    return userData;
  }

  async changeName(
    userId: string,
    newName: string,
  ): Promise<{ tokens: TokensType; user: UserDtoType }> {
    const user: User = await findAndCheckUser(userId);

    if(user.username === newName) {
      throw ApiError.BadRequest("Имя пользователя уже установлено")
    }

    const newUser: User | null = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        username: newName,
      },
    });

    return generateAndSaveTokens(newUser);
  }

  async changePass(
    userId: string,
    password: string,
    newPassword: string,
  ): Promise<{ tokens: TokensType; user: UserDtoType }> {
    const user: User = await findAndCheckUser(userId);
    const isCorrectPassword: boolean = await bcrypt.compare(password, user.passwordHash);
    if (!isCorrectPassword) {
      throw ApiError.BadRequest('Неверный пароль');
    }
    if (password === newPassword) {
      throw ApiError.BadRequest('Новый пароль не может совпадать с предыдущим');
    }
    const newPass: string = await hashPassword(newPassword, 5);

    const newUser: User | null = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        passwordHash: newPass,
      },
    });

    if (!newUser) {
      throw ApiError.UnauthorizedError();
    }

    return generateAndSaveTokens(newUser);
  }

  async changeEmail(userId: string, password: string, newEmail: string): Promise<void> {
    const user: User = await findAndCheckUser(userId);
    const isCorrectPassword: boolean = await bcrypt.compare(password, user.passwordHash);
    if (!isCorrectPassword) {
      throw ApiError.BadRequest('Неверный пароль');
    }
    const similarEmailUser: User | null = await prisma.user.findUnique({
      where: {
        email: newEmail,
      },
    });
    if (similarEmailUser) {
      throw ApiError.BadRequest('Пользователь с такой почтой уже суещствует');
    }
    const activationLink: string = uuidv4();
    await mailService.sendActivationEmail(
      newEmail,
      `${process.env.CLIENT_URL}/activate-email/${activationLink}`,
      user.username,
    );
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        newEmail,
        activationLink,
      },
    });
  }

  async activateEmail(
    activationLink: string,
    userId: string,
  ): Promise<{ tokens: TokensType; user: UserDtoType }> {
    const user: User | null = await prisma.user.findUnique({
      where: {
        id: userId,
        activationLink,
      },
    });
    if (!user) {
      throw ApiError.BadRequest('Пользователь не найден.');
    }
    const updatedUser: User | null = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        email: user.newEmail!,
        newEmail: '',
      },
    });

    return generateAndSaveTokens(updatedUser);
  }
}

const authServices = new AuthService();

export default authServices;

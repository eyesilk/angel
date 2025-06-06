import prisma from '@/lib/prisma';
import { Token } from '@prisma/client';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { TokensType } from '../types/tokens.type';
import { UserDtoType } from '../types/user.dto.type';

class TokenSevice {
  generateTokens(payload: Record<string, any>): TokensType {
    const accessToken: string = jwt.sign(payload, process.env.JWT_ACCESS_KEY, { expiresIn: '15m' });
    const refreshToken: string = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {
      expiresIn: '30d',
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  validateAccessToken(token: string): UserDtoType | null {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_KEY) as JwtPayload;
      return userData as UserDtoType;
    } catch (err) {
      return null;
    }
  }

  validateRefreshToken(token: string): UserDtoType | null {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_KEY) as JwtPayload;
      return userData as UserDtoType;
    } catch (err) {
      return null;
    }
  }

  async saveToken(userId: string, refreshToken: string): Promise<Token | void> {
    const updated: { count: number } = await prisma.token.updateMany({
      where: { userId },
      data: { refreshToken },
    });
    if (updated.count > 0) return;

    const token: Token = await prisma.token.create({
      data: {
        userId,
        refreshToken,
      },
    });
    return token;
  }

  async removeToken(refreshToken: string): Promise<Token> {
    const token = prisma.token.delete({
      where: {
        refreshToken,
      },
    });
    return token;
  }

  async findToken(refreshToken: string): Promise<Token | null> {
    const token: Token | null = await prisma.token.findUnique({
      where: {
        refreshToken,
      },
    });
    if (!token) {
      return null;
    }
    return token;
  }
}

const tokenService = new TokenSevice();

export default tokenService;

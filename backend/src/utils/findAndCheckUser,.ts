import ApiError from '@/exceptions/api-error';
import prisma from '@/lib/prisma';
import { User } from '@prisma/client';

export default async (userId: string): Promise<User> => {
  const user: User | null = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw ApiError.BadRequest('Пользователь не найден');
  }
  return user;
};

import ApiError from '@/exceptions/api-error';
import prisma from '@/lib/prisma';
import { Favorite } from '@prisma/client';

export default async (userId: string): Promise<Favorite> => {
  const favorite: Favorite | null = await prisma.favorite.findUnique({
    where: {
      userId,
    },
  });

  if (!favorite) {
    throw ApiError.BadRequest('Избранные товары не найдены');
  }

  return favorite;
};

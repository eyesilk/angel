import { TokensType } from '@/modules/auths/types/tokens.type';
import { UserDtoType } from '@/modules/auths/types/user.dto.type';
import UserDto from '@/modules/auths/dtos/user.dto';
import tokenService from '@/modules/auths/services/token.service';
import { User } from '@prisma/client';

export default async (user: User): Promise<{ tokens: TokensType; user: UserDtoType }> => {
  const userDto: UserDtoType = new UserDto(user);
  const tokens: TokensType = tokenService.generateTokens({ ...userDto });

  await tokenService.saveToken(userDto.id, tokens.refreshToken);

  return {
    tokens,
    user: userDto,
  };
};

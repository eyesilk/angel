import bcrypt from 'bcrypt';

export default async (password: string, saltRounds: number): Promise<string> => {
  const salt: string = await bcrypt.genSalt(saltRounds);
  const passwordHash: string = await bcrypt.hash(password, salt);
  return passwordHash;
};

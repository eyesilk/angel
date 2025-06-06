import { Tokens } from "./tokens.type";
import { User } from "./user.type";

export interface AuthAnswer {
  message: string;
  tokens: Tokens;
  user: User;
}

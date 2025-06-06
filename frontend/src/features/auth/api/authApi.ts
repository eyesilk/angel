import { axios } from '../../../shared/utils';
import { AuthAnswer } from '../model/types/authAnswer.type';
import { LoginFields } from '../model/types/loginFields.type';
import { UserFields } from '../model/types/userFields.type';

export default class AuthApi {
  static async registartion(fields: UserFields): Promise<AuthAnswer> {
    const { data } = await axios.post('/auth/registration', fields);

    return data;
  }

  static async login(fields: LoginFields): Promise<AuthAnswer> {
    const { data } = await axios.post('/auth/login', fields);

    return data;
  }

  static async activation(link: string): Promise<AuthAnswer> {
    const { data } = await axios.get(`/auth/activate/${link}`);

    return data;
  }

  static async activationEmail(link: string): Promise<AuthAnswer> {
    const { data } = await axios.get(`/auth/activateEmail/${link}`);

    return data;
  }

  static async refreshToken(): Promise<AuthAnswer> {
    const { data } = await axios.get('/auth/refresh');

    return data;
  }

  static async totalLogout(): Promise<AuthAnswer> {
    const { data } = await axios.get('/auth/logout');

    return data;
  }

  static async changeUsername(username: string): Promise<AuthAnswer> {
    const { data } = await axios.patch('/auth/changeName', { username });

    return data;
  }

  static async changePassowrd(fields: {
    password: string;
    newPassword: string;
  }): Promise<AuthAnswer> {
    const { data } = await axios.patch('/auth/changePass', fields);

    return data;
  }

  static async changeEmail(fields: {
    password: string;
    email: string;
  }): Promise<{ message: string }> {
    const { data } = await axios.patch('/auth/changeEmail', fields);

    return data;
  }
}

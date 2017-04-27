import { AuthProviders } from 'angularfire2';

export interface IUser {
  provider: AuthProviders;
  email: string;
  name: string;
  registrationTime: number;
  lastLogin: number;
  photo?: string;
}

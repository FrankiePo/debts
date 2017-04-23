import { AuthProviders } from 'angularfire2';
import { IContact } from './icontact';

export interface IUser {
  provider: AuthProviders;
  email: string;
  name: string;
  registrationTime: number;
  lastLogin: number;
  photo?: string;
  contacts: IContact[];
}

import { AuthProviders } from 'angularfire2';
import { IContact } from '../contact/icontact';

export interface IUser {
  provider: AuthProviders;
  email: string;
  name: string;
  registrationTime: number;
  lastLogin: number;
  photo?: string;
  contacts: IContact[];
}

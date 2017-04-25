import { IDebt } from './idebt';

export interface IContact {
  name: string;
  phone: string;
  email?: string;
  creationTime?: number;
  debts?: IDebt[] | null;
  $key?: string;
}

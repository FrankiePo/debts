import { DebtType } from './debt-type.enum';

export interface IDebt {
  description: string;
  amount: number;
  type: DebtType;
  creationTime: number;
}

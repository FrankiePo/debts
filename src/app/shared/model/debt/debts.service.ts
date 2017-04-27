import { Injectable } from '@angular/core';
import { IDebt } from './idebt';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class DebtsService {
  private debtsLocation: string;
  debts: FirebaseListObservable<IDebt[]>;
  constructor(private authService: AuthService, private af: AngularFire) {
    authService.isLogedIn.subscribe(authStatus => {
      if (!authStatus) {
        this.debts = null;
        return;
      }
      this.debtsLocation = `debts/${authService.getUid()}`;
      this.debts = af.database.list(this.debtsLocation);
    });
  }
  add(debt: IDebt) {
    const combinedDebt = Object.assign({}, debt, { creationTime: Date.now() });
    this.debts.push(combinedDebt);
  }
  remove(debt: IDebt) {
    this.debts.remove(debt.$key);
  }
  update(debt: IDebt) {
    this.debts.update(debt.$key, debt);
  }
}

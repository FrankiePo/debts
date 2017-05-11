import { Injectable } from '@angular/core';
import { IDebt } from './idebt';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { IContact } from '../contact/icontact';
import { DebtType } from './debt-type.enum';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DebtsService {
  debts: FirebaseListObservable<IDebt[]>;
  constructor(private fireAuth: AngularFireAuth, private db: AngularFireDatabase) {
    fireAuth.authState.subscribe(({uid}) => this.debts = db.list(`debts/${uid}`));
    // this.debts.map(debts => debts).subscribe(debts => console.log(debts));
  }
  add(debt: IDebt) {
    const combinedDebt = Object.assign({}, debt, { creationTime: Date.now() });
    this.debts.push(combinedDebt);
  }
  remove(debt: IDebt) {
    this.debts.remove(debt.$key);
  }
  update(debt: IDebt) {
    return this.debts.update(debt.$key, debt);
  }

  getByContact(contact: IContact): Observable<IDebt[]> {
    return this.debts.map((debts: IDebt[]) => debts.filter(debt => debt.contact === contact.$key));
  }
  eraseByContact(contact: IContact) {
    this.getByContact(contact).map(debts => debts.forEach(debt => this.remove(debt)));
  }
  getTotal(contact: IContact): Observable<number> {
    return this.getByContact(contact).map((debts: IDebt[]) => debts
        // .map(debt => debt.type === DebtType.toMe ? debt.amount : -debt.amount)
        .map(debt => debt.amount)
        .reduce((sum, amount) => sum + amount, 0)
    );
  }
}

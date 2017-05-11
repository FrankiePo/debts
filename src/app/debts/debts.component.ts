import { Component, OnChanges } from '@angular/core';
import { ContactsService } from '../shared/model/contact/contacts.service';
import { IContact } from '../shared/model/contact/icontact';
import { DebtComponent } from '../shared/dialogs/debt/debt.component';
import { IDebt } from '../shared/model/debt/idebt';
import { MdDialog } from '@angular/material';
import { DebtsService } from '../shared/model/debt/debts.service';
import { DebtType } from '../shared/model/debt/debt-type.enum';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css']
})
export class DebtsComponent implements OnChanges {
  contacts: Observable<IContact[]>;
  constructor(public contactsService: ContactsService, public debtsService: DebtsService, public dialog: MdDialog) {
    this.contacts = contactsService.contacts;
  }
  isToMe(debt: IDebt): boolean {
    return debt.type === DebtType.toMe;
  }
  isToContact(debt: IDebt): boolean {
    return debt.type === DebtType.toContact;
  }
  getDebts(contact: IContact): Observable<IDebt[]> {
    return this.debtsService.getByContact(contact);
  }
  getTotal(contact: IContact): Observable<number> {
    return this.debtsService.getTotal(contact);
  }
  openChangeDialog(debt: IDebt) {
    const dialogRef = this.dialog.open(DebtComponent);
    dialogRef.componentInstance.debt = debt;
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.debtsService.update(Object.assign(debt, result));
    });
  }
  opeAddDialog(contact: IContact) {
    const dialogRef = this.dialog.open(DebtComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (!result) {
        return;
      }
      const newDebt = Object.assign({}, result, { contact: contact.$key });
      this.debtsService.add(newDebt);
    });
  }
  eraseDebts(contact: IContact) {
    return this.debtsService.eraseByContact(contact);
  }
  removeDebt(debt: IDebt) {
    return this.debtsService.remove(debt);
  }
  ngOnChanges() {}
}

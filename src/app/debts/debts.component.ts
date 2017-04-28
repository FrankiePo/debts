import { Component } from '@angular/core';
import { ContactsService } from '../shared/model/contact/contacts.service';
import { IContact } from '../shared/model/contact/icontact';
import { DebtComponent } from '../shared/dialogs/debt/debt.component';
import { IDebt } from '../shared/model/debt/idebt';
import { MdDialog } from '@angular/material';
import { DebtsService } from '../shared/model/debt/debts.service';
import { DebtType } from '../shared/model/debt/debt-type.enum';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css']
})
export class DebtsComponent {
  contacts: IContact[];
  debts: IDebt[];
  constructor(public contactsService: ContactsService, public debtsService: DebtsService, public dialog: MdDialog) {
    debtsService.debts.subscribe(debts => {
      this.debts = debts;
    });
    contactsService.contacts.subscribe(contacts => {
      this.contacts = contacts;
    });
  }
  isToMe(debt: IDebt) {
    return debt.type === DebtType.toMe;
  }
  isToContact(debt: IDebt) {
    return debt.type === DebtType.toContact;
  }
  getDebts(contact: IContact) {
    return this.debts ? this.debts.filter(debt => debt.contact === contact.$key) : [];
  }
  getTotal(contact: IContact) {
    return this.getDebts(contact)
      .map(debt => debt.type === DebtType.toMe ? debt.amount : -debt.amount)
      .reduce((sum, amount) => sum + amount, 0);
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
    this.getDebts(contact).forEach(debt => this.removeDebt(debt));
  }
  removeDebt(debt: IDebt) {
    this.debtsService.remove(debt);
  }
}

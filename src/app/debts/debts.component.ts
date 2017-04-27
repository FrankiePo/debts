import { Component } from '@angular/core';
import { ContactsService } from '../shared/model/contact/contacts.service';
import { IContact } from '../shared/model/contact/icontact';
import { DebtComponent } from '../shared/dialogs/debt/debt.component';
import { IDebt } from '../shared/model/debt/idebt';
import { MdDialog } from '@angular/material';
import { DebtsService } from '../shared/model/debt/debts.service';

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
  getDebts(contact: IContact) {
    return this.debts ? this.debts.filter(debt => debt.contact === contact.$key) : [];
  }
  openChangeDialog(debt: IDebt) {
    const dialogRef = this.dialog.open(DebtComponent);
    dialogRef.componentInstance.debt = debt;
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (!result) {
        return;
      }
      this.debtsService.update(Object.assign({}, debt, result));
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
  removeDebt(debt) {
    this.debtsService.remove(debt);
  }
}

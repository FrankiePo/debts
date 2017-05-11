import { Component } from '@angular/core';
import { IContact } from '../shared/model/contact/icontact';
import { ContactsService } from '../shared/model/contact/contacts.service';
import { MdDialog } from '@angular/material';
import { ContactComponent } from '../shared/dialogs/contact/contact.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contacts: Observable<IContact[]>;
  constructor(public contactService: ContactsService, public dialog: MdDialog) {
    this.contacts = contactService.contacts;
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(ContactComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.contactService.add(result);
    });
  }
  openChangeDialog(contact: IContact) {
    const dialogRef = this.dialog.open(ContactComponent);
    dialogRef.componentInstance.contact = contact;
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.contactService.update(Object.assign(contact, result));
    });
  }
  deleteContact(contact: IContact) {
    this.contactService.remove(contact);
  }
}

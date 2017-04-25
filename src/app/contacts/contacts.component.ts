import { Component, OnInit } from '@angular/core';
import { IContact } from '../shared/model/icontact';
import { ContactsService } from '../shared/contacts.service';
import { MdDialog } from '@angular/material';
import { AddContactComponent } from '../dialogs/add-contact/add-contact.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: IContact[];
  constructor(public contactService: ContactsService, public dialog: MdDialog) {
    contactService.contacts.subscribe(contacts => {
      console.log("--contacts: ", contacts);
      this.contacts = contacts;
    });
  }

  ngOnInit() {
  }
  addContact(contact: IContact) {
    this.contactService.addContact(contact);
  }
  removeContact(contact: IContact) {

  }
  openAddDialog() {
    const dialogRef = this.dialog.open(AddContactComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.contactService.addContact(result);
    });
  }
  openChangeDialog(contact: IContact) {
    const dialogRef = this.dialog.open(AddContactComponent);
    dialogRef.componentInstance.contact = contact;
    dialogRef.afterClosed().subscribe(result => {
      this.contactService.updateContact(Object.assign(contact, result));
    });
  }
  deleteContact(contact: IContact) {
    this.contactService.removeContact(contact);
  }
}

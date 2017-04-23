import { Component, OnInit } from '@angular/core';
import { IContact } from '../shared/model/icontact';
import {LoginService} from "../shared/login.service";
import {FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: FirebaseListObservable<IContact[]>;
  constructor(loginService: LoginService) {
    this.contacts = loginService.contacts;
  }

  ngOnInit() {
  }
  addContact(contact: IContact) {
    return this.contacts.push(contact);
  }
}

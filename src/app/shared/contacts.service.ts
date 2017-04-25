import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { IContact } from './model/icontact';

@Injectable()
export class ContactsService {
  private contactLocation: string;
  // TODO: use IContact[] instead of FirebaseListObservable
  contacts: FirebaseListObservable<IContact[]>;

  constructor(private authService: AuthService, private af: AngularFire) {
    authService.isLogedIn.subscribe(authStatus => {
      if (!authStatus) {
        this.contacts = null;
        return;
      }
      this.contactLocation = `users/${authService.getAuth().uid}/contacts`;
      this.contacts = af.database.list(this.contactLocation);
    });
    // this.addContact({
    //   name: "Privet",
    //   phone: "7925432",
    //   email: "privet@mail.ru",
    //   creationTime: Date.now(),
    //   debts: null,
    // });
  }
  // TODO: add interface
  updateContact(contact) {
    this.contacts.update(contact.$key, contact);
  }
  addContact(contact: IContact) {
    const combinedContact = Object.assign({}, contact, { creationTime: Date.now() });
    this.contacts.push(combinedContact);
  };
  removeContact(contact) {
    console.log(contact.$key);
    this.contacts.remove(contact.$key);
  }
}

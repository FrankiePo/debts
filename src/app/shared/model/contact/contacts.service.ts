import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { IContact } from './icontact';

@Injectable()
export class ContactsService {
  private contactLocation: string;
  contacts: FirebaseListObservable<IContact[]>;
  constructor(private authService: AuthService, private af: AngularFire) {
    // TODO: probably this check should do guard
    authService.isLogedIn.subscribe(authStatus => {
      if (!authStatus) {
        this.contacts = null;
        return;
      }
      this.contactLocation = `users/${authService.getAuth().uid}/contacts`;
      this.contacts = af.database.list(this.contactLocation);
    });
  }
  update(contact) {
    this.contacts.update(contact.$key, contact);
  }
  add(contact: IContact) {
    const combinedContact = Object.assign({}, contact, { creationTime: Date.now() });
    this.contacts.push(combinedContact);
  };
  remove(contact) {
    this.contacts.remove(contact.$key);
  }
}

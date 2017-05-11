import { Injectable } from '@angular/core';
import { IContact } from './icontact';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ContactsService {
  contacts: FirebaseListObservable<IContact[]>;
  constructor(private auth: AngularFireAuth, private db: AngularFireDatabase) {
    auth.authState.subscribe(({uid}) => this.contacts = db.list(`contacts/${uid}`));
  }
  update(contact: IContact) {
    return this.contacts.update(contact.$key, contact);
  }
  add(contact: IContact) {
    const combinedContact = Object.assign({}, contact, { creationTime: Date.now() });
    return this.contacts.push(combinedContact);
  };
  remove(contact: IContact) {
    return this.contacts.remove(contact.$key);
  }
}

import { Injectable } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { IUser } from './model/iuser';
import { IContact } from "./model/icontact";

@Injectable()
export class LoginService {
  isLogedIn: boolean;
  user: FirebaseObjectObservable<IUser>;
  contacts: FirebaseListObservable<IContact[]>;
  constructor(public af: AngularFire) {
    this.isLogedIn = false;
    this.af.auth.subscribe(auth => {
      if (!auth) {
        this.isLogedIn = false;
        return;
      }
      console.log("---- User:", auth);
      this.isLogedIn = true;
      this.user = af.database.object(`users/${auth.uid}`);
      this.contacts = af.database.list(`users/${auth.uid}/contacts`);
      this.user.subscribe(data => {
        // Register user
        if (!data) {
          this.user.set({
            provider: auth.provider,
            email: auth.auth.email,
            name: auth.auth.displayName,
            photo: auth.auth.photoURL,
            registrationTime: Date.now(),
            lastLogin: Date.now(),
            contacts: []
          });
        }
      });
      this.user.update({lastLogin: Date.now()});
      // this.user.set({
      //   provider: auth.provider,
      //   email: auth.auth.email,
      //   name: auth.auth.displayName,
      //   photo: auth.auth.photoURL,
      //   registrationTime: Date.now(),
      //   lastLogin: Date.now(),
      //   contacts: [
      //     {
      //       name: "Вася1",
      //       creationTime: Date.now(),
      //       debts: []
      //     }, {
      //       name: "Вася2",
      //       creationTime: Date.now(),
      //       debts: [
      //         {
      //           description: "На часы",
      //           amount: 2500,
      //           creationTime: Date.now(),
      //         },
      //         {
      //           description: "На хлеб",
      //           amount: 20,
      //           creationTime: Date.now(),
      //         },
      //         {
      //           description: "Сникерс",
      //           amount: 50,
      //           creationTime: Date.now(),
      //         }
      //       ]
      //     }
      //   ]
      // });
    });
  }
  loginWithGoogle() {
    return !this.isLogedIn && this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect,
    });
  }
  logout() {
    return this.isLogedIn && this.af.auth.logout();
  }
}

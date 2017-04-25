import { Injectable } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class AuthService {
  isLogedIn: BehaviorSubject<boolean>;
  private auth;
  constructor(public af: AngularFire) {
    this.isLogedIn = new BehaviorSubject(false);
    this.af.auth.subscribe(auth => {
      if (!auth) {
        this.isLogedIn.next(false);
        return;
      }
      this.auth = auth;
      this.isLogedIn.next(true);

      // this.contacts = af.database.list(`users/${auth.uid}/contacts`);

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
  getAuth() {
    return this.auth;
  }
  loginWithGoogle() {
    return this.af.auth.login({
        provider: AuthProviders.Google,
        method: AuthMethods.Redirect,
      });
  }

  logout() {
    return this.af.auth.logout();
  }
}

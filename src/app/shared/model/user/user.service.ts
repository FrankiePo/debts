import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { IUser } from './iuser';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {
  user: FirebaseObjectObservable<IUser>;

  constructor(private fireAuth: AngularFireAuth, private db: AngularFireDatabase) {
    // authService.isLogedIn.subscribe(authStatus => {
    //   if (!authStatus) {
    //     this.user = null;
    //     return;
    //   }
    //   this.user = db.object(`users/${authService.getUid()}`);
    //   this.user.subscribe(user => {
    //     // Register new user
    //     if (!user.registrationTime) {
    //       this.registerUser();
    //     }
    //     // Update lastLogin time
    //     const currentTime = Date.now();
    //     if ((user.lastLogin + 30000) < currentTime) {
    //       this.user.update({
    //         lastLogin: currentTime
    //       });
    //     }
    //   });
    // });
  }
  // registerUser() {
  //   // TODO: add default debts and contacts
  //   const { provider, auth: {email, displayName, photoURL} } = this.authService.getAuth();
  //   this.user.set({
  //     provider: provider,
  //     email: email,
  //     name: displayName,
  //     photo: photoURL,
  //     registrationTime: Date.now(),
  //     lastLogin: Date.now(),
  //     contacts: []
  //   });
  // }
}

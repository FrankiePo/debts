import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { IUser } from './model/iuser';

@Injectable()
export class UserService {
  user: FirebaseObjectObservable<IUser>;

  constructor(private authService: AuthService, private af: AngularFire) {
    authService.isLogedIn.subscribe(authStatus => {
      if (!authStatus) {
        this.user = null;
        return;
      }
      this.user = af.database.object(`users/${authService.getAuth().uid}`);
      this.user.subscribe(user => {
        // Register new user
        if (!user.registrationTime) {
          this.registerUser();
        }
        // Update lastLogin time
        const currentTime = Date.now();
        if (user.lastLogin < currentTime) {
          this.user.update({
            lastLogin: currentTime
          });
        }
      });
    });
  }
  registerUser() {
    const { provider, auth: {email, displayName, photoURL} } = this.authService.getAuth();
    this.user.set({
      provider: provider,
      email: email,
      name: displayName,
      photo: photoURL,
      registrationTime: Date.now(),
      lastLogin: Date.now(),
      contacts: []
    });
  }
}

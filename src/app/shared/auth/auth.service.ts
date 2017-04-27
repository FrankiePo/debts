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

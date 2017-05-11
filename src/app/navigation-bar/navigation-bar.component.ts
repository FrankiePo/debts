import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  user: Observable<firebase.User>;
  isLogedIn: boolean;
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    afAuth.authState.subscribe(user => this.isLogedIn = Boolean(user));
  }
  login() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}

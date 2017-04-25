import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  isLogedIn: boolean;
  constructor(public authService: AuthService) {
    this.authService.isLogedIn.subscribe(status => this.isLogedIn = status);
  }
  login() {
    this.authService.loginWithGoogle();
  }
  logout() {
    this.authService.logout();
  }
  ngOnInit() {
  }
}

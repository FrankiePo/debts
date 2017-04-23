import { Component, OnInit } from '@angular/core';
import { LoginService } from "../shared/login.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  constructor(public loginService: LoginService) {}
  login() {
    this.loginService.loginWithGoogle();
  }
  logout() {
    this.loginService.logout();
  }
  ngOnInit() {
  }
  get isLogedIn(): boolean {
    return this.loginService.isLogedIn;
  }
}

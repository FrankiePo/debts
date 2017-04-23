import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './shared/login.service';

@Injectable()
export class IsLogedInGuard implements CanActivate {
  constructor(public loginService: LoginService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.isLogedIn) {
      return true;
    }
    // TODO:
    // this.loginService.loginWithGoogle();
    return false;
  }
}

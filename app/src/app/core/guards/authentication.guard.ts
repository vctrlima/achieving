import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  constructor(
    private router: Router,
  ) {

  }

  public canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/auth']);
    return false;
  }
  public canActivateChild(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/auth']);
    return false;
  }
  public canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/auth']);
    return false;
  }
  public canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/auth']);
    return false;
  }

  private isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') !== null
      && localStorage.getItem('currentUser') !== undefined;
  }
}

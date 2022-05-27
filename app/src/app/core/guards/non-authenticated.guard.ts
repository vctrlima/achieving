import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NonAuthenticatedGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
  ) { }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.isAuthenticated())
      return true;

    this.router.navigate(['/']);
    return false;
  }

  public canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.isAuthenticated())
      return true;

    this.router.navigate(['/']);
    return false;
  }

  private isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') !== null
      && localStorage.getItem('currentUser') !== undefined;
  }
}

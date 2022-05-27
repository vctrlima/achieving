import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@models/user.model';
import { BehaviorSubject, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>

  constructor(
    private httpClient: HttpClient,
  ) {
    this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public signIn(usernameOrEmail: string, password: string): Observable<User> {
    return this.httpClient
      .post<User>(`/api/users/sign-in`, { usernameOrEmail, password })
      .pipe(map((user: User) => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  public googleSignIn(user: User | null = null): void {
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    }
  }

  public signOut(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}

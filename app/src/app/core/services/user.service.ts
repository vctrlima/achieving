import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@models/user.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class UserService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public signIn(usernameOrEmail: string, password: string): Observable<User> {
    return this.httpClient
      .post<User>(`/api/users/sign-in`, { usernameOrEmail, password });
  }
}

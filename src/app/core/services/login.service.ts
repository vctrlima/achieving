import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User } from '@models/user.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    public login(username: string, password: string): Observable<User> {
        console.log('login');

        return of({ username, password })
            .pipe(delay(1000));
    }
}

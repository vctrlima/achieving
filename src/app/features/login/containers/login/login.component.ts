import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.reducer';

import * as fromAppActions from '../../../../state/app.actions'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

    public loginForm!: FormGroup;

    constructor(
        private store: Store<AppState>,
        private formBuilder: FormBuilder,
    ) { }

    public ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [true]
        });
    }

    public submitLoginForm(): void {
        console.log('submitLoginForm');

        this.store.dispatch(fromAppActions.doLogin({
            username: this.loginForm.value.username,
            password: this.loginForm.value.password,
        }));
    }
}

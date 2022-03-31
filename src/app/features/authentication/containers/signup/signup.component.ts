import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app.reducer';

import * as fromAppActions from '@state/app.actions'

@Component({
    selector: 'ang-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class SignupComponent implements OnInit {

    public signupForm!: FormGroup;

    constructor(
        private store: Store<AppState>,
        private formBuilder: FormBuilder,
    ) { }

    public ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            username: [null, [Validators.required]],
            email: [null, [Validators.required]],
            password: [null, [Validators.required]],
            confirmPassword: [null, [Validators.required]],
            agreeWithTerms: [false]
        });
    }

    public submitLoginForm(): void {
        console.log('submitLoginForm');

        this.store.dispatch(fromAppActions.doLogin({
            username: this.signupForm.value.username,
            password: this.signupForm.value.password,
        }));
    }
}

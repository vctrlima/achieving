import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

    public loginForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
    ) { }

    public ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [true]
        });
    }

    public submitLoginForm(): void {
        console.log('submit', this.loginForm.value);
    }
}

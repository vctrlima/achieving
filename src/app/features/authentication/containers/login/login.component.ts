import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromAppActions from '@state/app.actions';
import { AppState } from 'src/app/state/app.reducer';


@Component({
    selector: 'ang-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
    @ViewChild('loginWithGoogleBtn', { static: true }) loginWithGoogleBtn!: ElementRef;

    public loginForm!: FormGroup;

    auth2: any;

    constructor(
        private store: Store<AppState>,
        private formBuilder: FormBuilder,
    ) { }

    public ngOnInit(): void {
        this.googleAuthenticationSdk();

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

    private googleAuthenticationSdk(): void {
        (<any>window)['googleSDKLoaded'] = () => {
            (<any>window)['gapi'].load('auth2', () => {
                this.auth2 = (<any>window)['gapi'].auth2.init({
                    client_id: 'YOUR CLIENT ID HERE',
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email'
                });

                this.loginWithGoogle();
            });
        }

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];

            if (d.getElementById(id))
                return;

            js = d.createElement('script');
            js.id = id;
            js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";

            fjs?.parentNode?.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
    }

    private loginWithGoogle(): void {
        this.auth2.attachClickHandler(this.loginWithGoogleBtn.nativeElement, {},
            (googleAuthUser: any) => {

                let profile = googleAuthUser.getBasicProfile();

                console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
                console.log('ID: ' + profile.getId());
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());

                /* Write Your Code Here */

            }, (error: any) => {
                alert(JSON.stringify(error, undefined, 2));
            });
    }
}

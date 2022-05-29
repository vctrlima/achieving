import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@models/user.model';
import { Store } from '@ngrx/store';
import { AuthenticationService } from '@services/authentication.service';
import * as fromAppActions from '@state/app.actions';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/state/app.reducer';

@Component({
  selector: 'ang-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('loginWithGoogleBtn', { static: true }) loginWithGoogleBtn!: ElementRef;

  public loginForm!: FormGroup;
  private authSubscription: Subscription;

  auth2: any;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
    this.authSubscription = new Subscription();
  }

  public ngOnInit(): void {
    this.prepareGoogleAuthenticationSdk();
    this.prepareLoginForm();

    this.initAuthSubscription();
  }

  public ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  private prepareGoogleAuthenticationSdk(): void {
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

        const user: User = {
          username: profile.getEmail(),
          email: profile.getEmail(),
          token: googleAuthUser.getAuthResponse().id_token,
        };

        this.authenticationService.googleSignIn(user);

        this.router.navigate(['/']);

      }, (error: any) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  private prepareLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      usernameOrEmail: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  private initAuthSubscription(): void {
    this.authSubscription = this.authenticationService.currentUser.subscribe(
      (user: User | null) => {
        if (user) {
          console.log('User is logged in');
        } else {
          console.log('User == null');
        }
      }
    );
  }

  public submitLoginForm(): void {
    this.store.dispatch(fromAppActions.doLogin({
      usernameOrEmail: this.loginForm.value.usernameOrEmail,
      password: this.loginForm.value.password,
    }));
  }
}

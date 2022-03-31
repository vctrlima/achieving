import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '@services/login.service';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

import { SharedModule } from '@shared/shared.module';

import { LoginComponent } from './containers/login/login.component';
import { AuthenticationRoutingModule } from './authentication.routing';
import { SignupComponent } from './containers/signup/signup.component';

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthenticationRoutingModule,

        SharedModule,

        NzButtonModule,
        NzCheckboxModule,
        NzFormModule,
        NzIconModule,
        NzInputModule,
    ],
    providers: [
        LoginService
    ],
})

export class AuthenticationModule { }

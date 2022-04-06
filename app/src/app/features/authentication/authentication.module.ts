import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

import { SharedModule } from '@shared/shared.module';

import { LoginComponent } from './containers/login/login.component';
import { AuthenticationRoutingModule } from './authentication.routing';
import { SignupComponent } from './containers/signup/signup.component';

import { UserService } from '@services/user.service';

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
        NzDividerModule,
        NzFormModule,
        NzIconModule,
        NzInputModule,
    ],
    providers: [
        UserService,
    ],
})

export class AuthenticationModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzIconModule } from 'ng-zorro-antd/icon';

import { BackButtonComponent } from './components/back-button/back-button.component';

@NgModule({
    declarations: [
        BackButtonComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,

        NzIconModule,

    ],
    exports: [
        BackButtonComponent,
    ]
})
export class SharedModule { }

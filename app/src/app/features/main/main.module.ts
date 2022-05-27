import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main.routing';
import { MainComponent } from './main.component';
import { MenuComponent } from './components/menu/menu.component';

import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    MainComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NzIconModule,
  ]
})
export class MainModule { }

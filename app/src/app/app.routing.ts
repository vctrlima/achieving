import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { NonAuthenticatedGuard } from './core/guards/non-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./features/main/main.module').then(m => m.MainModule),
  },
  {
    path: 'auth',
    canActivate: [NonAuthenticatedGuard],
    canLoad: [NonAuthenticatedGuard],
    loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
